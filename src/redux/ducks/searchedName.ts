export const SET_SEARCHED_NAME = "SET_SEARCHED_NAME";

const initialState = {
    searchedName: ""
};

const reducer = (state = initialState, action: { type: any; searchedName: any; }) => {
    switch (action.type) {
    case SET_SEARCHED_NAME:
        return {...state, searchedName: action.searchedName};
    default: return state;
    }
};

export const setSearchedName = (searchedName:string) => ({type: SET_SEARCHED_NAME, searchedName});

export default reducer;
