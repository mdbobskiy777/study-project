import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga-test-plan/matchers';

import reducer, {
    FETCHED_SUBORDINATES,
    fetchSubordinatesAsync,
    SET_FETCHING, SET_SUBORDINATES,
    setFetching, setSubordinatesList, initialState
} from './subordinates';
import { SubordinatesResponse } from '../../types/api';
import { EmployersAPI } from '../../api/api';

describe('actions', () => {
    const subordinatesData: SubordinatesResponse = [
        'CEO',
        {
            'direct-subordinates': [
                'Samad Pitt',
                'Leanna Hogg'
            ]
        }
    ];

    it('should create an action SET_SUBORDINATES', () => {
        const expectedAction = {
            type: SET_SUBORDINATES, subordinatesData
        };

        expect(setSubordinatesList(subordinatesData)).toEqual(expectedAction);
    });

    it('should create an action SET_FETCHING', () => {
        const expectedAction = {
            type: SET_FETCHING, isFetching:true
        };

        expect(setFetching(true)).toEqual(expectedAction);
    });
});

describe('reducer', () => {
    const subordinatesData: SubordinatesResponse = [
        'CEO',
        {
            'direct-subordinates': [
                'Samad Pitt',
                'Leanna Hogg'
            ]
        }
    ];
    const paramsName = 'John Hartman';

    it('should return the initial state', () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(reducer(undefined,{})).toEqual(
            {
                employerData:[
                    '',
                    {
                        'direct-subordinates': []
                    }
                ],
                isFetching:false
            });
    });

    it('should handle SET_FETCHING', () => {

        expect(reducer(undefined,{ type: SET_FETCHING,isFetching: true })).toEqual(
            {
                employerData:[
                    '',
                    {
                        'direct-subordinates': []
                    }
                ],
                isFetching:true
            });
    });

    it('should handle SET_SUBORDINATES', () => {

        expect(reducer(undefined,{ type: SET_SUBORDINATES,subordinatesData })).toEqual(
            {
                employerData: subordinatesData,
                isFetching:false
            });
    });

    it('test only final effect with .provide()', () => {
        return expectSaga(fetchSubordinatesAsync,{ type: FETCHED_SUBORDINATES, name:paramsName})
            .provide([
                [call(EmployersAPI.getSubordinates,paramsName),subordinatesData]])
            .put(setFetching(false))
            .put(setSubordinatesList(subordinatesData))
            .call(EmployersAPI.getSubordinates,paramsName)
            .run();
    });

    it('integration test with withReducer', () => {
        return expectSaga(fetchSubordinatesAsync,{ type: FETCHED_SUBORDINATES, name:paramsName})
            .provide([
                [call(EmployersAPI.getSubordinates,paramsName),subordinatesData]])
            .withReducer(reducer,initialState)
            .put(setFetching(false))
            .put(setSubordinatesList(subordinatesData))
            .call(EmployersAPI.getSubordinates,paramsName)
            .run()
            .then(result => expect(result.storeState.employerData).toEqual(subordinatesData));
    });
});
