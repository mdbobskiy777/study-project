import reducer, {SET_EMPLOYERS, SET_FETCHING, setEmployersList, setFetching} from './employers';

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

    it('should return the initial state', () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(reducer(undefined,{})).toEqual(
            {
                employers: [],
                isFetching:false
            });
    });

    it('should handle SET_FETCHING', () => {

        expect(reducer(undefined,{ type: SET_FETCHING,isFetching: true })).toEqual(
            {
                employers: [],
                isFetching: true

            });
    });

    it('should handle SET_EMPLOYERS', () => {

        expect(reducer(undefined,{ type: SET_EMPLOYERS,employers })).toEqual(
            {
                employers: employers,
                isFetching:false
            });
    });
});
