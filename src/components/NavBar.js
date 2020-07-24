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
                type: 1
            },
            {
                name: 'general',
                type: 1
            }
        ]
    },
    {
        name: 'onmyoji',
        channels: [
            {
                name: 'sum-rage-monster',
                type: 2
            }
        ]
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