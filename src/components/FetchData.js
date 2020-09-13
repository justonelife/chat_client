import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { saveName, saveRoomsData } from '../actions';

const FetchData = () => {

    const url = 'http://localhost:5000/data';
    const dispatch = useDispatch();

    useEffect(() => {
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
        });
    }, [])

    return (
        <React.Fragment>
        </React.Fragment>
    )
}

export default FetchData;