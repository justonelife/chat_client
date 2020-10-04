import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../css/ChatZone.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socket } from './Socket';

const InputBar = () => {

    const [message, setMessage] = useState('');
    const nickname = useSelector(state => state.NickName);
    const [isTyping, setIsTyping] = useState(false);
    const user_id = localStorage.getItem('_id');

    const channelId = sessionStorage.getItem('selected_channel');

    useEffect(() => {
        let mounted = true;
        socket.on('green light typing', () => {
            if (mounted) setIsTyping(false);
        });

        return () => mounted = false;

    }, []);

    function handleSendMessage() {
        let text = message;
        const send_date = new Date().toString();
        socket.emit('message', user_id, text, channelId, send_date);
        socket.emit('end typing', nickname, user_id, channelId);
        setIsTyping(false);
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
        var inputText = formatText(e.target.innerHTML);
        if (inputText !== '') {
            if (!isTyping) {
                // console.log('typing');
                socket.emit('typing', nickname, user_id, channelId);
                setIsTyping(true);
            }
        } else {
            if (isTyping) {
                // console.log('end typing');
                socket.emit('end typing', nickname, user_id, channelId);
                setIsTyping(false);
            }
        }
    }
    
    function handlePasteRichText(e) {
        let paste = (e.clipboardData || window.clipboardData).getData('text/plain');
        document.execCommand("inserttext", false, paste);
        setMessage(message => message + paste);
        e.preventDefault();
    }


    return (
        <div className='message-bar'>

            <div className='message-bar__finput'>

                {message === '' && <div className='message-bar__placeholder'>message...</div>}
                
                <div className='message-bar__input' 
                        contentEditable='true'
                        role='textbox'
                        spellCheck='false'
                        autoComplete='false'
                        onInput={(e) => handleUserInput(e)}
                        onKeyDown={(e) => handleSpecialCase(e)}
                        onPaste={(e) => handlePasteRichText(e)}>
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