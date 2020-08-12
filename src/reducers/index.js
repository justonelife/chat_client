import NickName from './NickName';
import AvatarURL from './AvatarURL';
import RoomsData from './RoomsData';
import SelectChannel from './SelectChannel';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    NickName,
    AvatarURL,
    RoomsData,
    SelectChannel
});

export default rootReducer;