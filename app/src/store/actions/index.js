import axios from "axios";

export const FETCHING_AMIIBO_START = "FETCHING_AMIIBO_START";
export const FETCHING_AMIIBO_SUCCESS = "FETCHING_AMIIBO_SUCCESS";
export const FETCHING_AMIIBO_FAILURE = "FETCHING_AMIIBO_FAILURE";

export const getAmiibo = (url) => (dispatch) => {
  dispatch({ type: FETCHING_AMIIBO_START });
  axios
    .get(url)
    .then((res) => {
      dispatch({ type: FETCHING_AMIIBO_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCHING_AMIIBO_FAILURE });
    });
};
