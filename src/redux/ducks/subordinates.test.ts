import reducer, { SET_FETCHING, SET_SUBORDINATES, setFetching, setSubordinatesList } from './subordinates';
import { subordinatesResponse } from '../../types/api';

describe('actions', () => {
    const subordinatesData: subordinatesResponse = [
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
    const subordinatesData: subordinatesResponse = [
        'CEO',
        {
            'direct-subordinates': [
                'Samad Pitt',
                'Leanna Hogg'
            ]
        }
    ];

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
});
