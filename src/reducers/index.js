import logStateReducer from './logStateReducer';
import saveUserInfoReducer from './saveUserInfoReducer';
import saveRoomsReducer from './saveRoomsReducer';
import saveChannelsReducer from './saveChannelsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    logStateReducer,
    saveUserInfoReducer,
    saveRoomsReducer,
    saveChannelsReducer
});

export default rootReducer;