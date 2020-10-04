import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/LoginPanel.css';

const LoginPanel = () => {

    const [wrongLoginNotify, setWrongLoginNotify] = useState('');

    // var username = '';
    // var password = '';
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState(''); 

    const history = useHistory();

    useEffect(() => {
        let logged = parseInt(localStorage.getItem('logged'));
        if (logged === 1) {
            history.push('/chat');
        }
    });

    window.addEventListener('storage', function(e) {
        if (e.key === 'logged') {
            let logged = parseInt(localStorage.getItem(e.key));
            if (logged === 1) {
                history.push('/chat');
            }
        }
    });

    function onLoginBtnClick(e) {
        e.preventDefault();
        const url = 'http://localhost:5000/login';
        var data = {
            username: username,
            password: password
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
            if (data.allowLogin) {
                localStorage.setItem('logged', 1);
                localStorage.setItem('_id', data.user_id);
                history.push('/chat');
            } else {
                switch(data.err) {
                    case 'not exist':
                        setWrongLoginNotify('username not exist');
                        break;
                    case 'wrong password':
                        setWrongLoginNotify('wrong password');
                        break;
                    default:
                        break;
                }
            }
        });
    }
    function onUsernameChange(e) {
        // username = e.target.value;
        setUsername(e.target.value);
    }
    function onPasswordChange(e) {
        // password = e.target.value;
        setPassword(e.target.value);
    }


    return (
        <div className='login-panel center-center'>
            <h2 className='login-panel__header'>log in</h2>
            <form>

                <div className='finput mt-41'>
                    <input id='username'
                        className='finput__i'
                        placeholder='your name'
                        type='text'
                        name='username'
                        onChange={onUsernameChange} />
                </div>

                <div className='finput mt-33'>
                    <input id='password'
                        className='finput__i'
                        placeholder='password'
                        type='password'
                        name='password'
                        onChange={onPasswordChange} />
                </div>

                {wrongLoginNotify && <p className='login-panel__alert'>{wrongLoginNotify}</p>}

                <button className='login-panel__lbtn' onClick={onLoginBtnClick}>log in</button>

                <p className='login-panel__ntext center-line mt-21'>forgot user name or password?
                &nbsp;
                    <a className='login-panel__ntext' href='/forget'>click here.</a>
                </p>
                <ul className='social-btns mt-33 center-line'>
                    <li>
                        <button className='social-btns__btn social-btns--gg'>
                            <FontAwesomeIcon icon={['fab', 'google']} />
                        </button>
                    </li>
                    <li>
                        <button className='social-btns__btn social-btns--fb'>
                            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                        </button>
                    </li>
                    <li>
                        <button className='social-btns__btn social-btns--tt'>
                            <FontAwesomeIcon icon={['fab', 'twitter']} />
                        </button>
                    </li>
                </ul>
            </form>
        </div>
    );
}

export default LoginPanel;