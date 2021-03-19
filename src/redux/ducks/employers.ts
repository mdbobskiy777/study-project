import { call, put, takeEvery } from "redux-saga/effects";
import { EmployersAPI } from "../../api/api";

export const SET_EMPLOYERS = "SET_EMPLOYERS";
export const REQUESTED_EMPLOYERS_FAILED = "REQUESTED_EMPLOYERS_FAILED";
export const FETCHED_EMPLOYERS = "FETCHED_EMPLOYERS";

const initialState = {
    employers: []
};

const reducer = (state = initialState, action: { type: any; employers: any; }) => {

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
export const fetchEmployersList = () => ({type: FETCHED_EMPLOYERS});

const setEmployersList = (employers: any) => ({type: SET_EMPLOYERS, employers});

const requestEmployersError = () => ({type: REQUESTED_EMPLOYERS_FAILED});

export function* watchFetchEmployers() {
    yield takeEvery(FETCHED_EMPLOYERS, fetchEmployersAsync);
}

function* fetchEmployersAsync() {
    try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const employers = yield call(() => {
            return EmployersAPI.getEmployers();
        });
        yield put(setEmployersList(employers));
    } catch (error) {
        yield put(requestEmployersError());
    }
}

export default reducer;
