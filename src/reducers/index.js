import logStateReducer from './logStateReducer';
import channelSettingReducer from './channelSettingReducer';
import selectChannelReducer from './selectChannelReducer';
import grantUsernameReducer from './grantUsernameReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    logStateReducer: logStateReducer,
    channelSettingReducer: channelSettingReducer,
    sleectChannelReducer: selectChannelReducer,
    grantUsernameReducer: grantUsernameReducer
});

export default rootReducer;