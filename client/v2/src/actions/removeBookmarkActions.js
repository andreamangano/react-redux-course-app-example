import axios from 'axios'

//-----------------
// ACTION CONSTANTS
//-----------------
export const REQUEST_REMOVE_BOOKMARK = 'remove bookmark request triggered';
export const REQUEST_REMOVE_BOOKMARK_SUCCESS = 'remove bookmark request succeed';
export const REQUEST_REMOVE_BOOKMARK_FAILURE = 'remove bookmark request failed';

//----------------
// ACTION CREATORS
//----------------
export const requestRemoveBookmark = ({id}) => ({
  type: REQUEST_REMOVE_BOOKMARK,
  id
});

export const requestRemoveBookmarkSuccess = ({response, id}) => ({
  type: REQUEST_REMOVE_BOOKMARK_SUCCESS,
  response,
  id
});

export const requestRemoveBookmarkFailure = ({error, id}) => ({
  type: REQUEST_REMOVE_BOOKMARK_FAILURE,
  error,
  id
});

export function removeBookmark({id}) {
  return dispatch => {
    dispatch(requestRemoveBookmark({id}));

    return axios.delete(`/api/bookmarks/${id}`)
      .then(
        response => dispatch(requestRemoveBookmarkSuccess({response: response.data, id})),
        error => dispatch(requestRemoveBookmarkFailure(
          {
            error: 'Error occurred: Is not possible to remove the bookmark.', id
          })
        )
      )
  }
}