import React from 'react'
import PropTypes from 'prop-types'
import Bookmark from './../Bookmark/Bookmark'

const BookmarkList = ({items}) => (
  <div>
    {
      items.length === 0
        ? <h3>There are no bookmarks.</h3>
        : items.map(
            bookmark => <Bookmark key={bookmark.id} {...bookmark} />
          )
    }
  </div>
);

BookmarkList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape(Bookmark.propTypes)
  ).isRequired
};

export default BookmarkList