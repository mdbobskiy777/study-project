import {call, put, StrictEffect, takeEvery} from "redux-saga/effects";
import {EmployersAPI} from "../../api/api";

export const SET_SUBORDINATES = "GET_SUBORDINATES";
export const REQUESTED_SUBORDINATES_FAILED = "REQUESTED_SUBORDINATES_FAILED";
export const FETCHED_SUBORDINATES = "FETCHED_SUBORDINATES";
export const SET_FETCHING = "SET_FETCHING";

type InitialState = {
    employerData: string | Array<string>,
    isFetching:boolean
};
type ActionsTypes = typeof SET_SUBORDINATES;
type SetSubordinatesAction = {
    type:typeof SET_SUBORDINATES,
    subordinatesData:Array<string>
};
type FetchedSubordinatesAction = {
    type:typeof FETCHED_SUBORDINATES,
    name:string
};

const initialState: InitialState = {
    employerData: [],
    isFetching:false
};

const reducer = (state = initialState,
    action: any ):any => {

    switch (action.type) {
    case SET_SUBORDINATES:
        return {
            ...state, employerData: action.subordinatesData
        };
    case SET_FETCHING:
        return {
            ...state, isFetching:action.isFetching
        };
    default:
        return state;
    }
};

//action creators
export const fetchSubordinates = (name: string):FetchedSubordinatesAction => 
    ({type: FETCHED_SUBORDINATES, name});

export const setSubordinatesList = (subordinatesData: Array<string>):SetSubordinatesAction =>
    ({type: SET_SUBORDINATES, subordinatesData});

const requestSubordinatesError = () => ({type: REQUESTED_SUBORDINATES_FAILED});

export function* watchFetchSubordinates() :Generator<StrictEffect>{
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    yield takeEvery( FETCHED_SUBORDINATES, fetchSubordinatesAsync);
}

export const setFetching = (isFetching:boolean):any =>
    ({type: SET_FETCHING, isFetching});

function* fetchSubordinatesAsync(action: { name: string; }) {

    try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const subordinatesData = yield call(() => {
            return EmployersAPI.getSubordinates(action.name);
        });
        yield put(setSubordinatesList(subordinatesData));
        yield put(setFetching(false));
    } catch (error) {
        yield put(requestSubordinatesError());
    }
}

export default reducer;
