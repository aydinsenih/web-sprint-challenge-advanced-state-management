import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAIL,
    ADD_SMURF_START,
    ADD_SMURF_SUCCESS,
    ADD_SMURF_FAIL,
    SET_ERROR_TEXT,
} from "./../actions";

export const initialState = {
    smurfs: [],
    isBusy: false,
    error: null,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isBusy: true,
                error: null,
            };
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                isBusy: false,
                error: null,
                smurfs: [...action.payload],
            };
        case FETCH_SMURFS_FAIL:
            return {
                ...state,
                isBusy: false,
                error: action.payload,
            };
        case ADD_SMURF_START:
            return {
                ...state,
                isBusy: true,
                error: null,
            };
        case ADD_SMURF_SUCCESS:
            return {
                ...state,
                isBusy: false,
                error: null,
                smurfs: [...state.smurfs, action.payload],
            };
        case ADD_SMURF_FAIL:
            return {
                ...state,
                isBusy: false,
                error: action.payload,
            };
        case SET_ERROR_TEXT:
            return {
                ...state,
                isBusy: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;

//Task List:
//1. Add in the initialState needed to hold:
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary
