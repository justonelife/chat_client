import React from 'react';
import ChannelItem from './ChannelItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/RoomItem.css';

const RoomItem = (props) => {
    const name = props.name;
    const channelsList = props.channelsList;
    var selectedChannelItem = null;
    var channelItems = [];

    channelsList.forEach(val => channelItems.push(<ChannelItem name={val.name}
                                                               type={val.type}
                                                               id={val._id}
                                                               key={val._id} />));//fix key 
    return (
        <div className='mb-35'>
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
                {channelItems}
            </div>
        </div>
    )
}

export default RoomItem;