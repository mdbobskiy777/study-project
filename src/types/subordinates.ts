import { FETCHED_SUBORDINATES, SET_FETCHING, SET_SUBORDINATES } from '../redux/ducks/subordinates';

export type InitialState = {
    employerData: string | Array<string>,
    isFetching:boolean
};
export type ActionsTypes = SetSubordinatesAction | SetFetchedAction | FetchedSubordinatesAction;

export type SetSubordinatesAction = {
    type:typeof SET_SUBORDINATES,
    subordinatesData:Array<string>
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
    employerData: [],
    isFetching:false
};
