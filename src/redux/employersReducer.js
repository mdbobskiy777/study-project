import {call, put, takeEvery} from 'redux-saga/effects'

import {EmployersAPI} from "../api/api";

export const SET_EMPLOYERS = "SET_EMPLOYERS"
export const SET_SUBORDINATES = "GET_SUBORDINATES"
export const SET_SEARCHED_NAME = "SET_SEARCHED_NAME"
export const REQUESTED_EMPLOYERS_FAILED = "REQUESTED_EMPLOYERS_FAILED"
export const REQUESTED_SUBORDINATES_FAILED = "REQUESTED_SUBORDINATES_FAILED"
export const FETCHED_EMPLOYERS = "FETCHED_EMPLOYERS"
export const FETCHED_SUBORDINATES = "FETCHED_SUBORDINATES"

const initialState = {
    searchedName: '',
    employers: [],
    employerData: []
}
const employersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EMPLOYERS :
            return {
                ...state, employers: action.employers
            }
        case SET_SUBORDINATES:
            return {
                ...state,employerData: action.subordinatesData
            }
        case SET_SEARCHED_NAME:
            return {...state, searchedName: action.searchedName}
        default:
            return state
    }
}

//action creators
const setEmployersList = employers => ({type: SET_EMPLOYERS, employers})

export const setSearchedName = searchedName => ({type: SET_SEARCHED_NAME, searchedName})

const setSubordinatesList = subordinatesData => ({type: SET_SUBORDINATES, subordinatesData})

export const fetchEmployersList = () => {
    return {type: FETCHED_EMPLOYERS}

}
export const fetchSubordinates = (name) => {
    return {type: FETCHED_SUBORDINATES, name}

}
const requestEmployersError = () => {
    return {type: REQUESTED_EMPLOYERS_FAILED}
}
const requestSubordinatesError = () => {
    return {type: REQUESTED_SUBORDINATES_FAILED}
}

//sagas
export function* watchFetchEmployers() {
    yield takeEvery(FETCHED_EMPLOYERS, fetchEmployersAsync)
}

function* fetchEmployersAsync() {
    try {
        const employers = yield call(() => {
                return EmployersAPI.getEmployers()
            }
        )
        yield put(setEmployersList(employers))
    } catch (error) {
        yield put(requestEmployersError())
    }
}


export function* watchFetchSubordinates() {
    yield takeEvery(FETCHED_SUBORDINATES, fetchSubordinatesAsync)
}

function* fetchSubordinatesAsync(action) {

    try {
        debugger
        const subordinatesData = yield call(() => {
                return EmployersAPI.getSubordinates(action.name)
            }
        )
        yield put(setSubordinatesList(subordinatesData))
    } catch (error) {
        yield put(requestSubordinatesError())
    }
}


export default employersReducer
