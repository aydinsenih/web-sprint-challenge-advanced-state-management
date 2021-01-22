import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAIL = "FETCH_SMURFS_FAIL";
export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAIL = "ADD_SMURF_FAIL";
export const SET_ERROR_TEXT = "SET_ERROR_TEXT";

//Task List:
//1. Add fetch smurfs action:
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
export const fetchSmurfs = () => (dispatch) => {
    dispatch({ type: FETCH_SMURFS_START });
    axios
        .get("http://localhost:3333/smurfs")
        .then((res) => {
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            dispatch({ type: FETCH_SMURFS_FAIL, payload: err });
        });
};
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
export const addSmurf = (smurf) => (dispatch) => {
    dispatch({ type: ADD_SMURF_START, payload: smurf });
    axios
        .post("http://localhost:3333/smurfs", smurf)
        .then((res) => {
            dispatch({
                type: ADD_SMURF_SUCCESS,
                payload: res.data[res.data.length - 1],
            });
        })
        .catch((err) => {
            dispatch({ type: ADD_SMURF_FAIL, payload: err });
        });
};
//3. Add set error text action:
//              - return action object setting error text
export const setErrorText = (errorText) => (dispatch) => {
    dispatch({ type: SET_ERROR_TEXT, payload: errorText });
};
//4. Any other actions you deem nessiary to complete application.
