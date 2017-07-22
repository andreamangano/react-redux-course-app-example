import React from 'react'
import PropTypes from 'prop-types'
import Bookmark from './../Bookmark/Bookmark'

const BookmarkList = ({items, isFetching, error, actions}) => {

  const renderListItems = () =>
    items.length === 0
      ? <h3>There are no bookmarks.</h3>
      : items.map(
          bookmark => <Bookmark key={bookmark.id} {...{...bookmark, actions}} />
        );

  const renderList = () => error ? <h3>{error}</h3> : renderListItems();

  return <div>
    {
      isFetching
        ? <h3>Loading bookmarks...</h3>
        : renderList()
    }
  </div>
};

BookmarkList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape(Bookmark.propTypes)
  ).isRequired,
  isFetching: PropTypes.bool,
  error: PropTypes.string
};

export default BookmarkList