import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import RoomItem from './RoomItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/NavBar.css';

const ROOMS = [
    {
        roomName: 'web dev',
        channels: [
            {
                channelName: 'general',
            },
            {
                channelName: 'javascript'
            }
        ]
    }
]

const NavBar = () => {
    const username = useSelector(state => state.grantUsernameReducer);
    const url = 'http://localhost:5000/rooms';
    useEffect(() => {
        fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                username: username
            })
        })
        .then(res => console.log(res));
    });
    return (
        <div className='NavBar-wr'>
            <div className='NavBar-header'>
                <h1>pencil's server</h1>
                <button>
                    <FontAwesomeIcon icon='caret-down' />
                </button>
            </div>
            <RoomItem name={ROOMS[0].roomName} channelsList={ROOMS[0].channels} />
            <div className='NavBar-footer'>
                <button>setting</button>
            </div>
        </div>
    );
}

export default NavBar;