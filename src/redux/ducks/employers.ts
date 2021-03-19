import {call, put, StrictEffect, takeEvery} from "redux-saga/effects";
import {EmployersAPI} from "../../api/api";

export const SET_EMPLOYERS = "SET_EMPLOYERS";
export const REQUESTED_EMPLOYERS_FAILED = "REQUESTED_EMPLOYERS_FAILED";
export const FETCHED_EMPLOYERS = "FETCHED_EMPLOYERS";

export type Employers = Array<string>;
type InitialState = {
    employers: Employers;
};
type ActionTypes = typeof SET_EMPLOYERS;
type FetchedEmployersAction = {
    type:typeof FETCHED_EMPLOYERS
};
type setEmployersListAction = {
    type:typeof SET_EMPLOYERS,
    employers:Employers | unknown
};

const initialState: InitialState = {
    employers: []
};

const reducer = (state = initialState,
    action: { type: ActionTypes; employers: Employers; }):InitialState => {
    switch (action.type) {
    case SET_EMPLOYERS :
        return {
            ...state, employers: action.employers
        };
    default:
        return state;
    }
};

//action creators
export const fetchEmployersList = ():FetchedEmployersAction => ({type: FETCHED_EMPLOYERS});

const setEmployersList = (employers: Employers | unknown):setEmployersListAction =>
    ({type: SET_EMPLOYERS, employers});

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
    } catch (error) {
        yield put(requestEmployersError());
    }
}

export default reducer;
