import React from 'react';
import '../css/Avatar.css';
import { useSelector } from 'react-redux';

const Avatar = (props) => {
    const count = useSelector(state => state.AvatarUpdateCount);

    return (


        <img    src={props.src} 
                alt='avatar'
                className='avatar'
                style={{width: `${props.size}px`, height: `${props.size}px`}} 
                key={`a${props.size}${count}`}/>
    );
}

export default Avatar;