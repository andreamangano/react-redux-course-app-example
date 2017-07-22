import axios from 'axios'

//-----------------
// ACTION CONSTANTS
//-----------------
export const REQUEST_SAVE_BOOKMARK = 'save bookmark request triggered';
export const REQUEST_SAVE_BOOKMARK_SUCCESS = 'save bookmark request succeed';
export const REQUEST_SAVE_BOOKMARK_FAILURE = 'save bookmark request failed';
export const RESET_SAVE_BOOKMARK_STATE = 'reset the save bookmark state';

//----------------
// ACTION CREATORS
//----------------
export const requestSaveBookmark = ({payload}) => ({
  type: REQUEST_SAVE_BOOKMARK,
  payload
});

export const requestSaveBookmarkSuccess = ({response}) => ({
  type: REQUEST_SAVE_BOOKMARK_SUCCESS,
  response
});

export const requestSaveBookmarkFailure = ({error}) => ({
  type: REQUEST_SAVE_BOOKMARK_FAILURE,
  error
});

export const resetSaveBookmarkState = () => ({
  type: RESET_SAVE_BOOKMARK_STATE
});

export function resetSaveState() {
  return dispatch => dispatch(resetSaveBookmarkState())
}

export function saveBookmark({payload}) {
  return dispatch => {
    dispatch(requestSaveBookmark({payload}));

    return axios.post(`/api/bookmarks`, payload)
      .then(
        response => dispatch(requestSaveBookmarkSuccess({response: response.data})),
        error => dispatch(requestSaveBookmarkFailure({
          error: 'Error occurred: Is not possible to save the bookmark.'
        }))
      )
  }
}