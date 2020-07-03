import React from 'react';
import { Link } from 'react-router-dom';
import LoginPanel from './LoginPanel';
import '../css/LoginPage.css';

const LoginPage = () => {
    return (
        <div className='login-page'>
            <div className='login-page__header'>
                <div className='login-page__nav center-line'>
                    <div className='logo'></div>
                    <Link to='signup'>
                        <button className='create-btn'>create account</button>
                    </Link>
                </div>
            </div>
            <LoginPanel />
        </div>
    );
}

export default LoginPage;