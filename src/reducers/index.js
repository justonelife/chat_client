import NickName from './NickName';
import AvatarURL from './AvatarURL';
import RoomsData from './RoomsData';
import SelectChannel from './SelectChannel';
import MembersBarState from './MembersBarState';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    NickName,
    AvatarURL,
    RoomsData,
    SelectChannel,
    MembersBarState
});

export default rootReducer;