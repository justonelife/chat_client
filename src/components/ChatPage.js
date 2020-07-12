import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import '../css/ChatPage.css';

const ChatPage = () => {
    const logState = useSelector(state => state.logStateReducer);

    if (true) {
        return (
            <div className='chat-page'>
                <NavBar />
            </div>
        );
    } else {
        return (
            <Redirect to="/" />
        );
    }
    
}

export default ChatPage;