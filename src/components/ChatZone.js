import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../css/ChatZone.css';
import ChatZoneHeader from './ChatZoneHeader';
import MessagesBoard from './MessagesBoard';
import InputBar from './InputBar';
import MembersBar from './MembersBar';
import { socket } from './Socket';

const ChatZone = (props) => {
    const url = 'http://localhost:5000/channels';
    const showMembers = useSelector(state => state.MembersBarState);
    // const [message, setMessage] = useState('');
    // const [actSend, setActSend] = useState(false);
    const [channelData, setChannelData] = useState({});

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
        .then(data => setChannelData(data));

        const id = localStorage.getItem('_id');
        const room = sessionStorage.getItem('selected_channel');

        socket.emit('subscribe', { id, name, room });


    }, [useSelector(state => state.SelectChannel)])
    // console.log('chat zone');



    // useEffect(() => {
    //     var mb = document.getElementsByClassName('messages-board__stick-bottom')[0];
    //     mb.scrollTop = mb.scrollHeight - mb.clientHeight; //messages board auto scroll bottom
    //     setActSend(false);  //set to false to prepare for catch state change for update scroll down AGAIN
    // }, [actSend]);

    return (
        <div className='chat-zone'>
            <ChatZoneHeader channelName={channelData.name} />

            <div className='chat-zone__content'>
                <div className={'chat-zone__content__main' + (!showMembers ? ' chat-zone__content__main--active' : '')}>
                    
                    <MessagesBoard />
                    <InputBar />


                </div>


                <MembersBar />

            </div>
        </div>
    );
}

export default ChatZone;