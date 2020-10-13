import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveName } from '../actions';
import '../css/UserInfoManager.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UserInfoManager = (props) => {
    const dispatch = useDispatch();
    const [name, setName] = useState(props.name);
    const [nameModifyStage, setNameModifyStage] = useState(false);

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [changePassErrDesc, setChangePassErrDesc] = useState('');
    const [showChangePassWindow, setShowChangePassWindow] = useState(false);

    function handleTypeInName(e) {
        setName(e.target.value);
        setNameModifyStage(true);
    }

    function handleTypeInCurrentPassword(e) {
        setCurrentPassword(e.target.value);
    }
    function handleTypeInNewPassword(e) {
        setNewPassword(e.target.value);
    }
    function handleTypeInConfirmPassword(e) {
        setConfirmPassword(e.target.value);
    }

    function handleCancelName() {
        setName(props.name);
        setNameModifyStage(false);
    }

    function handleCancelPassword() {
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
        setShowChangePassWindow(false);
    }
     
    function handleOkName(e) {
        e.preventDefault();
        dispatch(saveName(name));
        setNameModifyStage(false);

        //@action POST 
        //@desc update new name in database
        fetch('http://localhost:5000/modify/name', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                user_id: localStorage.getItem('_id'),
                name: name
            }) 
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
            
    }

    function handleOkPassword(e) {
        console.log(currentPassword, newPassword, confirmPassword);
        e.preventDefault();
        if (!newPassword || !confirmPassword || !currentPassword) {
            setChangePassErrDesc('please fill all field');
            return;
        }
        if (newPassword !== confirmPassword) {
            setChangePassErrDesc('confirm password not match');
            return;
        }

        //@action POST
        //@desc update new password in database
        fetch('http://localhost:5000/modify/password', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                user_id: localStorage.getItem('_id'),
                currentPassword: currentPassword,
                password: newPassword
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.status);
                if (data.status === 'current password wrong') {
                    setChangePassErrDesc(data.status)
                } else {
                
                    console.log(data);
                    setShowChangePassWindow(false);
                    setCurrentPassword('');
                    setNewPassword('');
                    setConfirmPassword('');
                }
                    
            })
            .catch(err => console.log(err));


    }
    return (
        <div className='uim'>
            <div className='uim__cnt center-line'>

                <form className='block mb-35' onSubmit={(e) => e.preventDefault()}>
                    <label className='block__label' htmlFor='name'>name</label>
                    <div className='block__finput'>
                        <input  className='block__finput__input' id='name' type='text' value={name}
                                onChange={(e) => handleTypeInName(e)} />
                    </div>
                    <ul className={'macYnBtn' + (!nameModifyStage ? ' macYnBtn--inactive' : '')}>
                        <li className='macYnBtn__btnWr'>
                            <button className='macYnBtn__btn macYnBtn__btn--purple'
                                    type='button'
                                    onClick={handleOkName}>
                                <FontAwesomeIcon icon='check' />
                            </button>
                        </li>
                        <li className='macYnBtn__btnWr'>
                            <button className='macYnBtn__btn macYnBtn__btn--grey'
                                    type='button'
                                    onClick={handleCancelName}>
                                <FontAwesomeIcon icon='times' />
                            </button>
                        </li>
                    </ul>
                </form>

                <form className='block mb-35'>
                    <label className='block__label' htmlFor='password'>password</label>
                    <button className='rect-btn block__btn' 
                            id='password'
                            type='button'
                            onClick={() => setShowChangePassWindow(true)}>change password</button>
                </form>

                {showChangePassWindow &&
                    <div className='changePass-window mb-35'>
                        <div className='changePass-window__head'>
                            {changePassErrDesc && <p className='changePass-window__alert'>{changePassErrDesc}</p>}
                            <ul className='macYnBtn float-right'>
                                <li className='macYnBtn__btnWr'>
                                    <button className='macYnBtn__btn macYnBtn__btn--purple'
                                            onClick={(e) => handleOkPassword(e)}>
                                        <FontAwesomeIcon icon='check' />
                                    </button>
                                </li>
                                <li className='macYnBtn__btnWr'>
                                    <button className='macYnBtn__btn macYnBtn__btn--grey'
                                            onClick={handleCancelPassword}>
                                        <FontAwesomeIcon icon='times' />
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <form className='changePass-window__form' onSubmit={(e) => e.preventDefault()}>
                            <label className='changePass-window__label' htmlFor='current_password'>current password</label>
                            <div className='changePass-window__finput block__finput'>
                                <input  className='block__finput__input' 
                                        id='current_password'
                                        type='password'
                                        onChange={(e) => handleTypeInCurrentPassword(e)} />
                            </div>
                            <label className='changePass-window__label' htmlFor='new_password'>new password</label>
                            <div className='changePass-window__finput block__finput'>
                                <input  className='block__finput__input' 
                                        id='new_password'
                                        type='password'
                                        onChange={(e) => handleTypeInNewPassword(e)} />
                            </div>
                            <label className='changePass-window__label' htmlFor='confirm_new_password'>confirm new password</label>
                            <div className='changePass-window__finput block__finput'>
                                <input  className='block__finput__input' 
                                        id='confirm_new_password'
                                        type='password'
                                        onChange={(e) => handleTypeInConfirmPassword(e)} />
                            </div>
                        </form>
                    </div>
                }

                {/* <form className='block mb-35'>
                    <label className='block__label' htmlFor='theme'>theme</label>
                    <select id='theme'>
                        <option>dark</option>
                        <option>light</option>
                    </select>
                </form> */}
            </div>
        </div>
    );
}

export default UserInfoManager;