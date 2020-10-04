import React, { useState, useEffect } from 'react';
import ChatPage from './ChatPage';
import Loading from './Loading';
import { Redirect } from 'react-router-dom';
import { saveName, saveRoomsData } from '../actions';
import { useDispatch } from 'react-redux';

const ChatPageInit = () => {
    const url = 'http://localhost:5000/data';
    const dispatch = useDispatch();
    const logState = parseInt(localStorage.getItem('logged'));
    const [isFetched, setIsFetched] = useState(false);

    useEffect(() => {
        if (logState === 1) {
            const data = {
                user_id: localStorage.getItem('_id')
            }
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
                dispatch(saveName(data.nickname));
                dispatch(saveRoomsData(data.rooms));
                setIsFetched(true);
            });
        }
    }, [dispatch, logState])
    
    if (logState === 1) {
        if (isFetched) {
            return (
                <ChatPage />
            );
        } else {
            return <Loading />
        }
    } else {
        return (
            <Redirect to="/" />
        );
    }
}

export default ChatPageInit;