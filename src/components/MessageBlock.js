import React from 'react';
import Avatar from './Avatar';
import '../css/MessageBlock.css';

const MessageBlock = (props) => {
    const AVATAR_ENDPOINT = 'http://localhost:5000/avatar/';
    // type: 1: other user's messages, 2: your message, 3: the message right before is the same author
    const type = props.type;
    return (
        <div className='message-block clearfix'>
            {
                type === 1 || !type === 3
                    ? <div className='message-block__avatar'>
                        <Avatar src={AVATAR_ENDPOINT + props.avatarFilename}
                                size={40} />
                    </div>
                    : null
            }
            <div className={`message-block__message${type === 2
                ? ' message-block__message--own'
                : ''}`}>
                {props.text}
            </div>
        </div>
    );
}

export default MessageBlock;