import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga-test-plan/matchers';

import reducer, {
    SET_EMPLOYERS,
    SET_FETCHING,
    fetchEmployersAsync,
    setEmployersList,
    setFetching,
} from './employers';

import { EmployersAPI } from '../../api/api';
import { InitialState } from '../../types/employers';

describe('actions', () => {
    const employers = [
        'John Hartman',
        'Samad Pitt',
        'Amaya Knight',
        'Leanna Hogg',
        'Aila Hodgson',
        'Vincent Todd',
        'Faye Oneill',
        'Lynn Haigh',
        'Nylah Riddle'
    ];

    it('should create an action SET_EMPLOYERS', () => {
        const expectedAction = {
            type: SET_EMPLOYERS, employers
        };

        expect(setEmployersList(employers)).toEqual(expectedAction);
    });

    it('should create an action SET_FETCHING', () => {
        const expectedAction = {
            type: SET_FETCHING, isFetching:true
        };

        expect(setFetching(true)).toEqual(expectedAction);
    });
});

describe('reducer', () => {
    const employers = [
        'John Hartman',
        'Samad Pitt',
        'Amaya Knight',
        'Leanna Hogg',
        'Aila Hodgson',
        'Vincent Todd',
        'Faye Oneill',
        'Lynn Haigh',
        'Nylah Riddle'
    ];

    it('should handle SET_FETCHING', () => {

        expect(reducer(undefined,{ type: SET_FETCHING, isFetching: true })).toEqual(
            { employers: [], isFetching: true });
    });

    it('should handle SET_EMPLOYERS', () => {
        expect(reducer(undefined,{ type: SET_EMPLOYERS, employers })).toEqual(
            { employers: employers, isFetching:false });
    });
});

describe('sagas', () => {
    const employers = [
        'John Hartman',
        'Samad Pitt',
        'Amaya Knight',
        'Leanna Hogg',
        'Aila Hodgson',
        'Vincent Todd',
        'Faye Oneill',
        'Lynn Haigh',
        'Nylah Riddle'
    ];

    it('test only final effect with .provide()', () => {
        return expectSaga(fetchEmployersAsync)
            .provide([
                [call(EmployersAPI.getEmployers),employers]])
            .put(setFetching(false))
            .put(setEmployersList(employers))
            .call(EmployersAPI.getEmployers)
            .run();
    });

    it('integration test with withReducer', () => {
        const initialState: InitialState = {
            employers: [],
            isFetching:false
        };

        return expectSaga(fetchEmployersAsync)
            .withReducer(reducer,initialState)
            .provide([
                [call(EmployersAPI.getEmployers),employers]])
            .put(setFetching(false))
            .put(setEmployersList(employers))
            .call(EmployersAPI.getEmployers)
            .run()
            .then(result => expect(result.storeState.employers).toEqual(employers));
    });
});
