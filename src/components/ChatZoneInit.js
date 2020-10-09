import React, { useState, useEffect } from 'react';
import ChatZone from './ChatZone';
import Loading from './Loading';
import { useSelector } from 'react-redux';
import { socket } from './Socket'; 

const ChatZoneInit = () => {
    const url = 'http://localhost:5000/channels';
    const [channelData, setChannelData] = useState({});
    const [isFetched, setIsFetched] = useState(false);
    const name = useSelector(name => name.NickName);



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
            setIsFetched(true);
        })
        
        const id = localStorage.getItem('_id');
        const room = sessionStorage.getItem('selected_channel');
    
        socket.emit('subscribe', { id, name, room });
        
    }, [name])


    return (
        <React.Fragment>
            {
                isFetched 
                    ? <ChatZone channelData={channelData} />
                    : <Loading />
            }
        </React.Fragment>
    )
}

export default ChatZoneInit;