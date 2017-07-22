import axios from 'axios'

//-----------------
// ACTION CONSTANTS
//-----------------
export const REQUEST_TOGGLE_FAVOURITE = 'toggle favourite request triggered';
export const REQUEST_TOGGLE_FAVOURITE_SUCCESS = 'toggle favourite request succeed';
export const REQUEST_TOGGLE_FAVOURITE_FAILURE = 'toggle favourite request failed';

//----------------
// ACTION CREATORS
//----------------
export const requestToggleFavourite = ({id}) => ({
  type: REQUEST_TOGGLE_FAVOURITE,
  id
});

export const requestToggleFavouriteSuccess = ({response, id}) => ({
  type: REQUEST_TOGGLE_FAVOURITE_SUCCESS,
  response,
  id
});

export const requestToggleFavouriteFailure = ({error, id}) => ({
  type: REQUEST_TOGGLE_FAVOURITE_FAILURE,
  error,
  id
});

export function toggleFavourite({id, state}) {
  return dispatch => {
    const payload = {favourite: state};
    dispatch(requestToggleFavourite({id}));

    return axios.put(`/api/bookmarks/${id}`, payload)
      .then(
        response => dispatch(requestToggleFavouriteSuccess({response: response.data, id})),
        error => dispatch(requestToggleFavouriteFailure({
          error: 'Error occurred: Is not possible complete the action.',
          id
        }))
      )
  }
}