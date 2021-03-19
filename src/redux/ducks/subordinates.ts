import { call, put, takeEvery } from "redux-saga/effects";
import { EmployersAPI } from "../../api/api";

export const SET_SUBORDINATES = "GET_SUBORDINATES";
export const REQUESTED_SUBORDINATES_FAILED = "REQUESTED_SUBORDINATES_FAILED";
export const FETCHED_SUBORDINATES = "FETCHED_SUBORDINATES";

const initialState = {
    employerData: []
};

const reducer = (state = initialState, action: { type: any; subordinatesData: any; }) => {

    switch (action.type) {

    case SET_SUBORDINATES:
        return {
            ...state, employerData: action.subordinatesData
        };

    default:
        return state;

    }

};

//action creators
export const fetchSubordinates = (name:string) => ({type: FETCHED_SUBORDINATES, name});

const setSubordinatesList = (subordinatesData: any) => ({type: SET_SUBORDINATES, subordinatesData});

const requestSubordinatesError = () => ({type: REQUESTED_SUBORDINATES_FAILED});

export function* watchFetchSubordinates() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    yield takeEvery(FETCHED_SUBORDINATES, fetchSubordinatesAsync);
}

function* fetchSubordinatesAsync(action: { name: string; }) {

    try {

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const subordinatesData = yield call(() => {
            return EmployersAPI.getSubordinates(action.name);
        }
        );
        yield put(setSubordinatesList(subordinatesData));
    } catch (error) {
        yield put(requestSubordinatesError());
    }

}

export default reducer;
