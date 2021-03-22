type ActionsTypes = typeof SET_SEARCHED_NAME;
type InitialState = {
    searchedName: string
};
type SearchNameAction = {
    type: typeof SET_SEARCHED_NAME,
    searchedName: string
};

export const SET_SEARCHED_NAME = 'SET_SEARCHED_NAME';

const initialState: InitialState = {
    searchedName: ''
};

const reducer = (state = initialState,
    action: { type: ActionsTypes; searchedName: string; }): InitialState => {
    switch (action.type) {
    case SET_SEARCHED_NAME:
        return {...state, searchedName: action.searchedName};
    default:
        return state;
    }
};

export const setSearchedName = (searchedName: string): SearchNameAction =>
    ({type: SET_SEARCHED_NAME, searchedName});

export default reducer;
