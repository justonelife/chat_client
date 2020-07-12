import React from 'react';
import ChannelItem from './ChannelItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/RoomItem.css';

const RoomItem = (props) => {
    const name = props.name;
    const channelsList = props.channelsList;
    var selectedChannelItem = null;
    return (
        <div>
            <div className='room-item'>
                <button className='room-item__caretBtn'>
                    <FontAwesomeIcon icon='caret-down' />
                </button>
                <h1 className='room-item__name'>{name}</h1>
                <button className='room-item__plusBtn'>
                    <FontAwesomeIcon icon='plus' />
                </button>
            </div>
    
            {selectedChannelItem}

            <div className='channels-list'>
                <ChannelItem name={channelsList[0].channelName} />
                <ChannelItem name={channelsList[1].channelName} />
            </div>
        </div>
    )
}

export default RoomItem;