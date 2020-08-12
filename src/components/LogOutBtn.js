import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import { socket } from './Socket';

const LogOutBtn = () => {
    // const disPatch = useDispatch();
    const history = useHistory();

    window.addEventListener('storage', function(e) {
        if (e.key === 'logged') {
            history.push('/');
        }
    });    

    return (
        <button onClick={() => {
            localStorage.removeItem('logged');
            localStorage.removeItem('_id');
            history.push('/');
        }}>
            log out
        </button>
    );
}

export default LogOutBtn;