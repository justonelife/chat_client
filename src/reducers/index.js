import logStateReducer from './logStateReducer';
import saveUserInfoReducer from './saveUserInfoReducer';
import saveRoomsReducer from './saveRoomsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    logStateReducer,
    saveUserInfoReducer,
    saveRoomsReducer
});

export default rootReducer;