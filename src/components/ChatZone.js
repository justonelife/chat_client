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
    const url = 'http://localhost:5000/channels';
    const showMembers = useSelector(state => state.MembersBarState);
    const [channelData, setChannelData] = useState({});
    const [messages, setMessages] = useState([]);

    const dispatch = useDispatch();

    const name = useSelector(state => state.NickName);


    useEffect(() => {
        var temp = sessionStorage.getItem('selected_channel');

        const data = {
            id: temp
        };
        fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            setChannelData(data);
            setMessages([]);
        })

        const id = localStorage.getItem('_id');
        const room = sessionStorage.getItem('selected_channel');

        socket.emit('subscribe', { id, name, room });




    }, [useSelector(state => state.SelectChannel)])

    useEffect(() => {

        socket.on('message', (_id, user_id, text, send_date) => {
            setMessages(messages => [...messages, { _id, user_id, text, send_date }]);
        });

        socket.on('member changed avatar', (their_id) => {
            console.log('on command');
            fetch('http://localhost:5000/avatar/' + their_id)
                .then(res => dispatch(increaseAvatarUpdateCount()));
        });

        socket.on('typing', (nickname) => {
            console.log(nickname);
        });

    }, [])




    return (
        <div className='chat-zone'>
            <ChatZoneHeader channelName={channelData.name} />

            <div className='chat-zone__content'>
                <div className={'chat-zone__content__main' + (!showMembers ? ' chat-zone__content__main--active' : '')}>
                    
                    <MessagesBoard messages={messages} />
                    <InputBar />
                    <TypingBoard />


                </div>


                <MembersBar />

            </div>
        </div>
    );
}

export default ChatZone;