import React from 'react'
import PropTypes from 'prop-types';

const Bookmark = ({id, title, url, favourite}) => (
  <div id={`bookmark-${id}`}>
    <h4>{title}</h4>
    <a href={url}>{url}</a>
    <div>
      <button>
        {favourite ? 'Remove from Favourites' : 'Add to Favourites'}
      </button>
      <button>Delete</button>
    </div>
  </div>
);

Bookmark.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  url: PropTypes.string.isRequired,
  favourite: PropTypes.bool.isRequired
};

export default Bookmark
