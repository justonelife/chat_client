import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/LoginPanel.css';

class LoginPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.onLoginBtnClick = this.onLoginBtnClick.bind(this);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }
    onLoginBtnClick() {
        const url = 'http://localhost:5000/login';
        var data = {
            username: this.state.username,
            password: this.state.password
        };
        var history = useHistory();
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
                history.push('/chat')
            }
        });
    }
    onUsernameChange(e) {
        this.setState({
            username: e.target.value
        });
    }
    onPasswordChange(e) {
        this.setState({
            password: e.target.value
        });
    } 
    render() {


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
                               onChange={this.onUsernameChange} />
                    </div>

                    <div className='finput mt-33'>
                        <input id='password' 
                               className='finput__i' 
                               placeholder='password' 
                               type='password' 
                               name='password'
                               onChange={this.onPasswordChange} />
                    </div>

                    <button className='login-panel__lbtn' type='submit' onClick={this.onLoginBtnClick}>log in</button>

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
}

export default LoginPanel;