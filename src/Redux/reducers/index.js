//  REDUX
import counterReducer from './counter';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

//  Combining the reducers you wish to use if you got more than one
const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
});

export default allReducers;