import React from 'react';
import '../css/ChatZone.css';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toggleMembersBar } from '../actions';

const ChatZoneHeader = (props) => {
    const dispatch = useDispatch();
    return (
        <div className='chat-zone__head'>
            <h2 className='chat-zone__head__channel-name'>{props.channelName}</h2>
            <button className='showUsers-btn' onClick={() => dispatch(toggleMembersBar())}>
                <FontAwesomeIcon icon='users' />
            </button>
        </div>
    );
}

export default ChatZoneHeader;