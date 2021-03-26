import { call, put, StrictEffect, takeEvery } from 'redux-saga/effects';

import { EmployersAPI } from '../../api/api';
import {
    ActionsTypes,
    FetchedSubordinatesAction,
    InitialState,
    initialState, SetFetchedAction,
    SetSubordinatesAction
} from '../../types/subordinates';
import { subordinatesResponse } from '../../types/api';

export const SET_SUBORDINATES = 'GET_SUBORDINATES';
export const REQUESTED_SUBORDINATES_FAILED = 'REQUESTED_SUBORDINATES_FAILED';
export const FETCHED_SUBORDINATES = 'FETCHED_SUBORDINATES';
export const SET_FETCHING = 'SET_FETCHING';


const reducer = (state = initialState,
    action: ActionsTypes ):InitialState => {
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

export const setSubordinatesList = (subordinatesData: subordinatesResponse):SetSubordinatesAction =>
    ({type: SET_SUBORDINATES, subordinatesData});

const requestSubordinatesError = () => ({type: REQUESTED_SUBORDINATES_FAILED});

export function* watchFetchSubordinates() :Generator<StrictEffect>{
    yield takeEvery(FETCHED_SUBORDINATES, fetchSubordinatesAsync);
}

export const setFetching = (isFetching:boolean):SetFetchedAction =>
    ({type: SET_FETCHING, isFetching});

function* fetchSubordinatesAsync(action: FetchedSubordinatesAction) {
    try {
        const subordinatesData:subordinatesResponse = yield call(() => {
            return EmployersAPI.getSubordinates(action.name);
        });
        yield put(setSubordinatesList(subordinatesData));
        yield put(setFetching(false));
    } catch (error) {
        yield put(requestSubordinatesError());
    }
}

export default reducer;
