import React, { useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import RoomItem from './RoomItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/NavBar.css';
import LogOutBtn from './LogOutBtn';

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
    const user_nickname = useSelector(state => state.NickName);
    const roomsData = useSelector(state => state.RoomsData);
    // console.log('watch 1 ' + roomsData.length);
    var roomItems = [];
    roomsData.forEach(val => roomItems.push(<RoomItem name={val.name}
                                                      channelsList={val.channels}
                                                      key={val.id}/>));

    const [test, setTest] = useState({});
    // useEffect(() => {
    //     var data = {
    //         id: "5f0a76c99408a7dc2a2441a0"
    //     }
    //     fetch('http://localhost:5000/channels', {
    //         method: 'POST',
    //         mode: 'cors',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //     .then(res => res.json())
    //     .then(data => setTest(data));


    // }, [])
    return (
        <div className='navbar-wr'>
            <div className='navbar__header'>
                <h1 className='navbar__header__title'>{user_nickname}'s server</h1>
                <button className='navbar__header__btn'>
                    <FontAwesomeIcon icon='caret-down' />
                </button>
            </div>
            {roomItems}
            {/* <div className='navbar-footer'>
                <button>setting</button>
            </div> */}
            <LogOutBtn />
            <p>{test.name}</p>
        </div>
    );
}

export default NavBar;