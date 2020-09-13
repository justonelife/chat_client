import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../css/ChatZone.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socket } from './Socket';

const InputBar = () => {

    const [message, setMessage] = useState('');
    const nickname = useSelector(state => state.NickName);

    const channelId = sessionStorage.getItem('selected_channel');

    function handleSendMessage() {

        const user_id = localStorage.getItem('_id');
        let text = message;
        const send_date = new Date().toString();
        socket.emit('message', user_id, text, channelId, send_date);
        setMessage('');

    }

    function handleSpecialCase(e) {
        if (e.keyCode === 13 && !e.shiftKey) {
            e.preventDefault();
            e.target.innerHTML = '';
            if (message !== '') handleSendMessage();
        }
    }

    function handleUserInput(e) {
        setMessage(formatText(e.target.innerHTML));
        if (message !== '') socket.emit('typing', nickname, channelId);
    }

    return (
        <div className='message-bar'>

            <div className='message-bar__finput'>

                {message === '' 
                    ? <div className='message-bar__placeholder'>message...</div>
                    : null
                }
                
                <div className='message-bar__input' 
                        contentEditable='true'
                        spellCheck='false'
                        autoComplete='false'
                        onInput={(e) => handleUserInput(e)}
                        onKeyDown={(e) => handleSpecialCase(e)}>
                        
                </div>


                <button className='paper-clip-btn'>
                    <FontAwesomeIcon icon='paperclip' />
                </button>
                <button className='message-image-btn'>
                    <FontAwesomeIcon icon='image' />
                </button>
                <button className='message-emoji-btn'>
                    <FontAwesomeIcon icon='laugh-squint' />
                </button>


            </div>
        </div>
    );
}

export default InputBar;


function formatText(message) {
    return message.replace(/(&nbsp;|<div>|<\/div>)/g, ' ')
                  .replace(/<br>/g, '\n')
                  .replace(/&gt;/g, '>')
                  .replace(/&lt;/g, '<')
                  .trimEnd();
}