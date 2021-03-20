import {call, put, StrictEffect, takeEvery} from "redux-saga/effects";
import {EmployersAPI} from "../../api/api";

export const SET_EMPLOYERS = "SET_EMPLOYERS";
export const REQUESTED_EMPLOYERS_FAILED = "REQUESTED_EMPLOYERS_FAILED";
export const FETCHED_EMPLOYERS = "FETCHED_EMPLOYERS";
export const SET_FETCHING = "SET_FETCHING";

export type Employers = Array<string>;
type InitialState = {
    employers: Employers,
    isFetching:boolean
};
type ActionTypes = typeof SET_EMPLOYERS | typeof SET_FETCHING;
type FetchedEmployersAction = {
    type:typeof FETCHED_EMPLOYERS
};
type setEmployersListAction = {
    type:typeof SET_EMPLOYERS,
    employers:Employers | unknown
};

const initialState: InitialState = {
    employers: [],
    isFetching:false
};

const reducer = (state = initialState,
    action: any):InitialState => {
    // eslint-disable-next-line no-debugger
    debugger;
    switch (action.type) {
    case SET_EMPLOYERS :
        return {
            ...state, employers: action.employers
        };
    case SET_FETCHING:
        return {
            ...state,isFetching:action.isFetching
        };
    default:
        return state;
    }
};

//action creators
export const fetchEmployersList = ():FetchedEmployersAction => ({type: FETCHED_EMPLOYERS});

const setEmployersList = (employers: Employers | unknown):setEmployersListAction =>
    ({type: SET_EMPLOYERS, employers});

export const setFetching = (isFetching:boolean):any =>
    ({type: SET_FETCHING, isFetching});

const requestEmployersError = () => ({type: REQUESTED_EMPLOYERS_FAILED});

export function* watchFetchEmployers():Generator<StrictEffect>{
    yield takeEvery(FETCHED_EMPLOYERS, fetchEmployersAsync);
}

function* fetchEmployersAsync():Generator<StrictEffect> {
    try {
        const employers:Employers | unknown = yield call(() => {
            return EmployersAPI.getEmployers();
        });
        yield put(setEmployersList(employers));
        yield put(setFetching(false));
    } catch (error) {
        yield put(requestEmployersError());
    }
}

export default reducer;
