import React from 'react';
import '../css/TypingBoard.css';

const TypingBoard = (props) => {
    const membersTyping = props.list;
    // const membersTyping = [];
    var filMembersTyping = [];

    if (membersTyping.length > 6) {
        filMembersTyping = membersTyping.slice(0, 6);
        filMembersTyping.push('. . .');
    }
    else filMembersTyping = membersTyping;

    return (
        <div className='typing-board'>
            
            {membersTyping.length > 0 ?
                <ul className='jumping-dots'>
                    <li className='jumping-dots__dot'></li>
                    <li className='jumping-dots__dot'></li>
                    <li className='jumping-dots__dot'></li>
                </ul> : null
            }
            <p className='typing-board__text'>
                <strong className='typing-board__text__names'>
                    {filMembersTyping.join(', ')}
                </strong>

                {membersTyping.length > 0 ?
                    <span className='typing-board__text__typing'> 
                        {membersTyping.length > 1 ? 'are' : 'is'} typing
                    </span> : null
                }
            </p>

        </div>
    );
}

export default TypingBoard;