import React from 'react';
import '../css/Avatar.css';

const Avatar = (props) => {
    return (
        <img className='avatar' src={props.src} alt='avatar'/>
    );
}

export default Avatar;