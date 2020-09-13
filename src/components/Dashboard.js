import React, { useState } from 'react';
import Avatar from './Avatar';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/Dashboard.css';
import ConfirmPopup from './ConfirmPopup';
import { increaseAvatarUpdateCount } from '../actions';
import { socket } from './Socket';

const Dashboard = () => {
    const ENDPOINT = 'http://localhost:5000/uploads';
    const AVATAR_ENDPOINT = 'http://localhost:5000/avatar/';
    const [imgFile, setImgFile] = useState({});
    const user_id = localStorage.getItem('_id');
    const dispatch = useDispatch();
    const roomsData = useSelector(state => state.RoomsData);
    console.log(roomsData);

    function handleFileUploaded(e) {
        setImgFile(e.target.files[0]);
    }
    function saveBtnClick() {

        //Delete existed avatar 
        fetch(`http://localhost:5000/avatars/del/${user_id}`, {
            method: 'POST',
            mode: 'cors'
        })
            .then(res => {

                //Save new avatar
                var formData = new FormData();
                formData.append('avatar', imgFile, user_id);
                return fetch(ENDPOINT, {
                    method: 'POST',
                    mode: 'cors',
                    body: formData
                })
                    .then(res => res.json())
                    .then(data => {
                        return fetch(AVATAR_ENDPOINT + user_id)
                            .then(res => {
                                NotifyAvatarChangeToSocket(roomsData, user_id);
                                dispatch(increaseAvatarUpdateCount());
                                setImgFile({});
                            });
                    })
                    .catch(err => console.log(err));
            });


    }
    function cancelBtnClick() {
        setImgFile({});
    }

    return (
        <div className='dashboard-wr'>
            <div className='dashboard__avatar'>
                <Avatar src={AVATAR_ENDPOINT + user_id}
                    size={80} />
                <input id='avatar_input'
                    type='file'
                    className='dashboard__avatar-input'
                    accept='.jpg, .png'
                    onChange={(e) => handleFileUploaded(e)} />
                <label htmlFor='avatar_input' className='dashboard__avatar-label'>
                    <FontAwesomeIcon icon='camera' />
                </label>
                {
                    (imgFile.type === 'image/jpeg' || imgFile.type === 'image/png')
                        ? <ConfirmPopup yesClick={saveBtnClick} noClick={cancelBtnClick} />
                        : null
                }
            </div>
        </div>
    );
}

export default Dashboard;


const NotifyAvatarChangeToSocket = (roomsData, id) => {
    var channelsList = [];
    for (var i = 0; i < roomsData.length; i++) {
        var tempArr = roomsData[i].channels;    // Array()
        for (var j = 0; j < tempArr.length; j++ ) channelsList.push(tempArr[j]._id);
    }
    socket.emit('notify avatar changed', channelsList, id);
}