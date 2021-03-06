import reducer ,{ SET_SEARCHED_NAME, setSearchedName } from './searchedName';

describe('actions', () => {
    it('should create an action SET_SEARCHED_NAME', () => {
        const searchedName = 'Oleg Vynnyk';

        const expectedAction = {
            type: SET_SEARCHED_NAME, searchedName
        };

        expect(setSearchedName(searchedName)).toEqual(expectedAction);
    });
});

describe('reducer', () => {
    it('should handle SET_SEARCHED_NAME', () => {
        const searchedName = 'Sobaka';

        expect(reducer(undefined,{ type: SET_SEARCHED_NAME,searchedName })).toEqual(
            {
                searchedName: searchedName
            });
    });
});
