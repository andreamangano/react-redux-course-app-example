import axios from 'axios'

//-----------------
// ACTION CONSTANTS
//-----------------
export const REQUEST_BOOKMARKS = 'bookmark list request triggered';
export const REQUEST_BOOKMARKS_SUCCESS = 'bookmark list request succeed';
export const REQUEST_BOOKMARKS_FAILURE = 'bookmark list request failed';

//----------------
// ACTION CREATORS
//----------------
export const requestBookmarks = () => ({
  type: REQUEST_BOOKMARKS
});

export const requestBookmarksSuccess = ({bookmarks}) => ({
  type: REQUEST_BOOKMARKS_SUCCESS,
  bookmarks
});

export const requestBookmarksFailure = ({error}) => ({
  type: REQUEST_BOOKMARKS_FAILURE,
  error
});

export function fetchBookmarks() {
  return dispatch => {

    dispatch(requestBookmarks());

    return axios.get('/api/bookmarks')
      .then(
        response => dispatch(requestBookmarksSuccess({bookmarks: response.data})),
        error => dispatch(requestBookmarksFailure(
          {error: 'Error occurred during the bookmarks retrieving'}
        ))
      )
  }
}