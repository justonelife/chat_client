import React from 'react';
import { useSelector } from 'react-redux';
import '../css/ChatZone.css';

const MembersBar = () => {
    const showMembers = useSelector(state => state.MembersBarState);
    return (
        <div className={'chat-zone__content__side' + (showMembers ? ' chat-zone__content__side--active' : '')}>

        </div>
    );
}

export default MembersBar;