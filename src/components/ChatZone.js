import React, { useState } from 'react';
import '../css/ChatZone.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ChatZone = () => {
    const [showMembers, setShowMembers] = useState(true);
    const [message, setMessage] = useState('');

    return (
        <div className='chat-zone'>
            <div className='chat-zone__head'>
                <h2 className='chat-zone__head__channel-name'>general</h2>
                <button className='showUsers-btn' onClick={() => setShowMembers(!showMembers)}>
                    <FontAwesomeIcon icon='users' />
                </button>
            </div>
            <div className='chat-zone__content'>
                <div className={'chat-zone__content__main' + (!showMembers ? ' chat-zone__content__main--active' : '')}>
                    <div className='messages-board'></div>
                    <div className='message-bar'>

                        <div className='message-bar__finput'>

                            {message === '' 
                                ? <div className='message-bar__placeholder'>message...</div>
                                : null
                            }
                            
                            <div className='message-bar__input' 
                                 contentEditable='true'
                                 spellCheck='false'
                                 aria-autocomplete='false'
                                 onInput={(e) => setMessage(e.target.innerHTML)}></div>


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
                </div>


                <div className={'chat-zone__content__side' + (showMembers ? ' chat-zone__content__side--active' : '')}>
                </div>

            </div>
        </div>
    );
}

export default ChatZone;