import input from './input';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    input: input
});

export default rootReducer;