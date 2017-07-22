import {
  REQUEST_SAVE_BOOKMARK,
  REQUEST_SAVE_BOOKMARK_SUCCESS,
  REQUEST_SAVE_BOOKMARK_FAILURE,
  RESET_SAVE_BOOKMARK_STATE
} from './../actions/saveBookmarkActions'

const initialState = {
  isSaving: false,
  error: null,
  response: null
};

function addBookmarkReducer(
  state = initialState,
  action) {

  switch(action.type) {

    case REQUEST_SAVE_BOOKMARK:
      return {
        ...state,
        isSaving: true
      };

    case REQUEST_SAVE_BOOKMARK_SUCCESS:
      return {
        ...state,
        isSaving: false,
        response: action.response
      };

    case REQUEST_SAVE_BOOKMARK_FAILURE:
      return {
        ...state,
        isSaving: false,
        error: action.error
      };

    case RESET_SAVE_BOOKMARK_STATE:
      return initialState; // Reset the state

    default:
      return state;
  }
}

export default addBookmarkReducer