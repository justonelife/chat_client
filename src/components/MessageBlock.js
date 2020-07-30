import React from 'react';
import Avatar from './Avatar';
import '../css/MessageBlock.css';

const MessageBlock = (props) => {
    // type: 1: other user's messages, 2: your message, 3: the message right before is the same author
    const type = props.type;
    return (
        <div className='message-block clearfix'>
            {
                type === 1 || !type === 3
                    ? <div className='message-block__avatar'>
                        <Avatar src='https://picsum.photos/id/206/500/500' />
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