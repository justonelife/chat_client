import React from 'react';
import NavBar from './NavBar';
import MainBar from './MainBar';
import '../css/ChatPage.css';



const ChatPage = () => {

    return (
        <div className='chat-page'>
            <NavBar />
            <MainBar />
        </div>
    );
    
    
}

export default ChatPage;