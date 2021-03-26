import { subordinatesResponse } from './api';

import { FETCHED_SUBORDINATES, SET_FETCHING, SET_SUBORDINATES } from '../redux/ducks/subordinates';

export type InitialState = {
    employerData: subordinatesResponse,
    isFetching:boolean
};
export type ActionsTypes = SetSubordinatesAction | SetFetchedAction | FetchedSubordinatesAction;

export type SetSubordinatesAction = {
    type:typeof SET_SUBORDINATES,
    subordinatesData:subordinatesResponse
};

export type FetchedSubordinatesAction = {
    type:typeof FETCHED_SUBORDINATES,
    name:string
};

export type SetFetchedAction = {
    type:typeof SET_FETCHING,
    isFetching:boolean
};

export const initialState: InitialState = {
    employerData:[
        '',
        {
            'direct-subordinates': []
        }
    ],
    isFetching:false
};
