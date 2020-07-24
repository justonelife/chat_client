import React, { useEffect } from 'react';
import io from 'socket.io-client';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import Dashboard from './Dashboard';
import ChatZone from './ChatZone';
import '../css/ChatPage.css';

const ChatPage = () => {
    const logState = useSelector(state => state.logStateReducer);
    useEffect(() => {
        var socket = io('http://localhost:5000');
    });

    if (true) {
        return (
            <div className='chat-page'>
                <NavBar />
                <ChatZone />
            </div>
        );
    } else {
        return (
            <Redirect to="/" />
        );
    }
    
}

export default ChatPage;