import React from 'react'
import PropTypes from 'prop-types';

const Bookmark = ({id, title, url, favourite, isLoading, isRemoving, actions}) => {
  const classes = [];
  isLoading && classes.push('is-loading');
  isRemoving && classes.push('is-removing');

  return <div id={`bookmark-${id}`} className={`${classes.join(' ')}`}>
    <h4>{title}</h4>
    <a href={url}>{url}</a>
    <div>
      <button onClick={() => actions.toggleFavourite(id, !favourite)}>
        {favourite ? 'Remove from Favourites' : 'Add to Favourites'}
      </button>
      <button onClick={() => actions.removeBookmark(id)}>Delete</button>
    </div>
  </div>
};

Bookmark.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  url: PropTypes.string.isRequired,
  favourite: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool,
  isRemoving: PropTypes.bool,
  actions: PropTypes.objectOf(PropTypes.func)
};

Bookmark.defaultProps = {
  isLoading: false,
  isRemoving: false
};

export default Bookmark
