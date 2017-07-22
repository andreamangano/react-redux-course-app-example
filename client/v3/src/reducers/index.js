import { combineReducers } from 'redux'
import bookmarkList from './bookmarkListReducer'
import addBookmark from './addBookmarkReducer'

const bookmarksAppReducers = combineReducers({
  bookmarkList,
  addBookmark
});

export default bookmarksAppReducers