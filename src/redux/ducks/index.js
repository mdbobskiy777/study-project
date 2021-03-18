import employers from './employers';
import searchedName from './searchedName';
import subordinates from './subordinates';
import {combineReducers} from 'redux';

export default combineReducers({
    employers:employers,
    searchedName:searchedName,
    subordinates:subordinates
});
