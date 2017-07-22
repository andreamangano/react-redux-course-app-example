import {
  REQUEST_BOOKMARKS,
  REQUEST_BOOKMARKS_SUCCESS,
  REQUEST_BOOKMARKS_FAILURE
} from './../actions/bookmarkListActions'

import {
  REQUEST_REMOVE_BOOKMARK,
  REQUEST_REMOVE_BOOKMARK_SUCCESS
} from './../actions/removeBookmarkActions'

import {
  REQUEST_SAVE_BOOKMARK_SUCCESS
} from './../actions/saveBookmarkActions'

import {
  REQUEST_TOGGLE_FAVOURITE,
  REQUEST_TOGGLE_FAVOURITE_SUCCESS,
  REQUEST_TOGGLE_FAVOURITE_FAILURE
} from './../actions/toggleFavouriteActions'

function bookmarkReducer(state, action) {

  switch(action.type) {

    case REQUEST_REMOVE_BOOKMARK:
      return {
        ...state,
        isRemoving: true
      };

    case REQUEST_TOGGLE_FAVOURITE:
      return {
        ...state,
        isLoading: true
      };

    case REQUEST_TOGGLE_FAVOURITE_SUCCESS:
      return {
        ...state,
        favourite: !state.favourite,
        isLoading: false
      };

    //@TODO: handle error
    case REQUEST_TOGGLE_FAVOURITE_FAILURE:
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
}

function bookmarksReducer(
  state = {
    isFetching: false,
    error: null,
    items: []
  },
  action) {

  switch(action.type) {

    //------------------
    // REQUEST BOOKMARKS
    //------------------

    case REQUEST_BOOKMARKS:
      return {
        ...state,
        isFetching: true
      };

    case REQUEST_BOOKMARKS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.bookmarks
      };

    case REQUEST_BOOKMARKS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };

    //------------------------
    // REQUEST REMOVE BOOKMARK
    //------------------------

    case REQUEST_REMOVE_BOOKMARK_SUCCESS:
      const elementToDelete = state.items.find(item => item.id === action.response.removeElement.id);

      return {
        ...state,
        items: state.items.filter(item => item !== elementToDelete)
      };


    // Handled by bookmark() function
    case REQUEST_REMOVE_BOOKMARK:
    case REQUEST_TOGGLE_FAVOURITE:
    case REQUEST_TOGGLE_FAVOURITE_SUCCESS:
      return {
        ...state,
        items: state.items.map(item => item.id === action.id ? bookmarkReducer(item, action) : item)
      };

    //----------------------
    // REQUEST SAVE BOOKMARK
    //----------------------

    case REQUEST_SAVE_BOOKMARK_SUCCESS:
      return {
        ...state,
        items: [action.response,...state.items]
      };

    default:
      return state
  }
}

export default bookmarksReducer