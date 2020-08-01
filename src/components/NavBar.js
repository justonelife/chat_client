import React from 'react';
import { useSelector } from 'react-redux';
import RoomItem from './RoomItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/NavBar.css';

const ROOMS = [
    {
        name: 'web dev',
        channels: [
            {
                name: 'javascript',
                _id: "5f0a77f09408a7dc2a2441a1",
                type: 1
            },
            {
                name: 'general',
                _id: "5f0a76c99408a7dc2a2441a0",
                type: 1
            }
        ]
    },
    {
        name: 'general',
        channels: []
    }
];

const NavBar = () => {
    const userInfo = useSelector(state => state.saveUserInfoReducer);
    const roomsData = ROOMS;
    // useSelector(state => state.saveRoomsReducer);
    var roomItems = [];
    roomsData.forEach(val => roomItems.push(<RoomItem name={val.name}
                                                      channelsList={val.channels}
                                                      key={val.name}/>));
    return (
        <div className='navbar-wr'>
            <div className='navbar__header'>
                <h1 className='navbar__header__title'>pencil's server</h1>
                <button className='navbar__header__btn'>
                    <FontAwesomeIcon icon='caret-down' />
                </button>
            </div>
            {roomItems}
            {/* <div className='navbar-footer'>
                <button>setting</button>
            </div> */}
        </div>
    );
}

export default NavBar;