import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RoomItem from './RoomItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/NavBar.css';
import Avatar from './Avatar';
import { useHistory } from 'react-router-dom';
import { selectChannel } from '../actions';


const NavBar = () => {
    // console.log('nav bar');
    const dispatch = useDispatch();
    const user_id = localStorage.getItem('_id');
    const history = useHistory();
    const user_nickname = useSelector(state => state.NickName);
    const roomsData = useSelector(state => state.RoomsData);
    var roomItems = [];
    roomsData.forEach(val => roomItems.push(<RoomItem name={val.name}
        channelsList={val.channels}
        key={val.id} />));


    //for sync between tabs in same browser
    window.addEventListener('storage', function (e) {
        if (e.key === 'logged') {
            history.push('/');
        }
    });


    return (
        <div className='navbar-wr'>
            <div className='navbar__header'>
                <h1 className='navbar__header__title'>{user_nickname}'s server</h1>
                <button className='navbar__header__btn'>
                    <FontAwesomeIcon icon='caret-down' />
                </button>
            </div>
            {roomItems}
            <div className='navbar__footer'>
                <div className='navbar__footer__avatar'>
                    <Avatar src={`http://localhost:5000/avatar/${user_id}`}
                        size={40} />
                </div>
                <button className='dashboard-btn'
                        onClick={() => {
                            sessionStorage.removeItem('selected_channel');
                            dispatch(selectChannel(''));
                        }}>
                    <FontAwesomeIcon icon='address-card' />
                </button>
                {/* <LogOutBtn /> */}

                <button className='logout-btn' onClick={() => {
                    localStorage.removeItem('logged');
                    localStorage.removeItem('_id');
                    sessionStorage.removeItem('selected_channel');
                    history.go('/');
                }}>
                    <FontAwesomeIcon icon='sign-out-alt' />
                </button>


            </div>
        </div>
    );
}

export default NavBar;