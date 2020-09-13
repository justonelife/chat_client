import NickName from './NickName';
import RoomsData from './RoomsData';
import SelectChannel from './SelectChannel';
import MembersBarState from './MembersBarState';
import AvatarUpdateCount from './AvatarUpdateCount'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    NickName,
    RoomsData,
    SelectChannel,
    MembersBarState,
    AvatarUpdateCount
});

export default rootReducer;