import axios from "axios";

export const FETCHING_CATIMAGE_START = "FETCHING_CATIMAGE_START";
export const FETCHING_CATIMAGE_SUCCESS = "FETCHING_CATIMAGE_SUCCESS";
export const FETCHING_CATIMAGE_FAILURE = "FETCHING_CATIMAGE_FAILURE";

export const getCatImage = () => (dispatch) => {
  dispatch({ type: FETCHING_CATIMAGE_START });
  axios
    .get(`https://aws.random.cat/meow`)
    .then((resp) => {
      dispatch({ type: FETCHING_CATIMAGE_SUCCESS, payload: resp.data.file });
    })
    .catch((err) => {
      dispatch({ type: FETCHING_CATIMAGE_FAILURE, payload: err });
    });
};
