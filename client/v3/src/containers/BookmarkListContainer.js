import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBookmarks } from './../actions/bookmarkListActions'
import { removeBookmark } from './../actions/removeBookmarkActions'
import { toggleFavourite } from './../actions/toggleFavouriteActions'

import BookmarkList from './../components/BookmarkList/BookmarkList';

class BookmarkListContainer extends Component {
  render() {
    return <BookmarkList {...this.props}/>
  }

  componentDidMount() {
    this.props.actions.loadBookmarks()
  }
}

const mapStateToProps = ({bookmarkList}) => ({...bookmarkList});

const mapDispatchToProps = dispatch => ({
  actions: {
    loadBookmarks: () => dispatch(fetchBookmarks()),
    toggleFavourite: (id, state) => dispatch(toggleFavourite({id, state})),
    removeBookmark: id =>  dispatch(removeBookmark({id}))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookmarkListContainer);
