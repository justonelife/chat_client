import React from 'react';
import '../css/TypingBoard.css';

const TypingBoard = () => {
    const membersTyping = ['pen', 'eraser', 'gogo', 'monsterHunterReal', 'IamAsh', 'MashBro', 'Nunu'];
    var filMembersTyping = [];

    if (membersTyping.length > 6) {
        filMembersTyping = membersTyping.slice(0, 6);
        filMembersTyping.push('. . .');
    }
    else filMembersTyping = membersTyping;

    console.log(typeof filMembersTyping.join(', '), filMembersTyping.join(', '));

    return (
        <div className='typing-board'>
            <ul className='jumping-dots'>
                <li className='jumping-dots__dot'></li>
                <li className='jumping-dots__dot'></li>
                <li className='jumping-dots__dot'></li>
            </ul>
            <p className='typing-board__text'>
                <strong className='typing-board__text__names'>
                    {filMembersTyping.join(', ')}
                </strong>
                <span className='typing-board__text__typing'> 
                    {membersTyping.length > 1 ? 'are' : 'is'} typing
                </span>
            </p>
        </div>
    );
}

export default TypingBoard;