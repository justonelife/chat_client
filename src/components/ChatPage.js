import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import Dashboard from './Dashboard';
import ChatZone from './ChatZone';
import '../css/ChatPage.css';


const ChatPage = () => {
    

    const [selectedChannel, setSelectedChannel] = useState(sessionStorage.getItem('selected_channel'));

    useEffect(() => {
        setSelectedChannel(sessionStorage.getItem('selected_channel'));
    }, [useSelector(state => state.SelectChannel)]);

    var display = undefined;

    if (!selectedChannel) {
        display = <Dashboard />;
    } else {
        display = <ChatZone />;
    }

    const logState = parseInt(localStorage.getItem('logged'));



    if (logState === 1) {
        return (
            <div className='chat-page'>
                <NavBar />
                {display}
            </div>
        );
    } else {
        return (
            <Redirect to="/" />
        );
    }
    
    
}

export default ChatPage;