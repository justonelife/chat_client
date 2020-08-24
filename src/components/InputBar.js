import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../css/ChatZone.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socket } from './Socket';

const InputBar = () => {

    const [message, setMessage] = useState('');
    const avatarURL = useSelector(state => state.AvatarURL);

    function handleSendMessage() {

        // let d = new Date();
        // let dtime = d.getTime();    //generate key for MessageBlock

        // let formatedMessageText = formatText(message);

        // messages.push(<MessageBlock type={2}
        //                             text={formatedMessageText}
        //                             key={dtime} />);
        // setMessageItems(messages);
        // setActSend(true);   //catch state change to update scorll down
        // setMessage('');
        let formatedMessageText = formatText(message);
        const sender = localStorage.getItem('_id');
        const channelId = sessionStorage.getItem('selected_channel');
        const time = new Date();
        socket.emit('message', sender, formatedMessageText, channelId, time, avatarURL);
        // setMessage('');
        // console.log('sent');

    }

    function handleSpecialCase(e) {
        if (e.keyCode === 13 && !e.shiftKey) {
            e.preventDefault();
            e.target.innerHTML = '';
            handleSendMessage();
        }
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
                        onInput={(e) => setMessage(e.target.innerHTML)}
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
    var result = message.replace(/&nbsp;/g, ' ')
                        .replace(/<br>/g, '\n')
                        .trimEnd();
    return result;
}