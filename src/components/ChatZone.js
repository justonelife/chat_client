import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../css/ChatZone.css';
import ChatZoneHeader from './ChatZoneHeader';
import MessagesBoard from './MessagesBoard';
import InputBar from './InputBar';
import MembersBar from './MembersBar';
import TypingBoard from './TypingBoard';
import { socket } from './Socket';

import { increaseAvatarUpdateCount } from '../actions';



const ChatZone = (props) => {
    
    const showMembers = useSelector(state => state.MembersBarState);
    const [messages, setMessages] = useState(props.channelData.messages);
    const [typingMems, setTypingMems] = useState([]);
    const dispatch = useDispatch();
    
    
    useEffect(() => {
        let mounted = true;
        
        socket.on('message', (_id, user_id, text, send_date) => {
            if (mounted) setMessages(messages => [...messages, { _id, user_id, text, send_date }]);
        });
        
        socket.on('member changed avatar', (their_id) => {
            if (mounted) {
                fetch('http://localhost:5000/avatar/' + their_id)
                    .then(res => dispatch(increaseAvatarUpdateCount()));
            }
        });
        
        socket.on('typing', (nickname) => {
            if (mounted) setTypingMems(names => [...names, nickname]);
        });

        socket.on('end typing', (nickname) => {
            if (mounted) {
                var temp = [...typingMems];
                var index = temp.indexOf(nickname);
                if (index !== -1) {
                    temp.splice(index, 1);
                    setTypingMems(temp);
                }
            }
        });

        return () => mounted = false;
        
    }, [dispatch, typingMems])
    

    return (
        <div className='chat-zone'>
            <ChatZoneHeader channelName={props.channelData.name} />

            <div className='chat-zone__content'>
                <div className={'chat-zone__content__main' + (!showMembers ? ' chat-zone__content__main--active' : '')}>
                    
                    <MessagesBoard messages={messages} />
                    <InputBar />
                    <TypingBoard list={typingMems} />


                </div>


                <MembersBar />

            </div>
        </div>
    );
}

export default ChatZone;