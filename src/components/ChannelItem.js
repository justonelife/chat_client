import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../css/ChannelItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SettingPage from './SettingPage';
import { selectChannel } from '../actions';

const ChannelItem = (props) => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    function onBtnX() {
        setIsOpen(false);
    }

    // console.log('watch 2 ' + props.name + '&' + props.id);
    return (
        <React.Fragment>
            <div className='channel center-line' 
                 onClick={() => {
                    dispatch(selectChannel(props.id));
                    sessionStorage.setItem('selected_channel', props.id);
                    console.log('sessionStorage ' + sessionStorage.getItem('selected_channel') + ' props.id ' + props.id);
                 }}>


                <p className='channel__name'>{props.name}</p>
                <button className='channel__invite'>
                    <FontAwesomeIcon icon='user-plus' />
                </button>
                {   
                    props.type === 1  
                    ?   <button className='channel__setting'
                                onClick={() => setIsOpen(true)}>
                            <FontAwesomeIcon icon='cog' />
                        </button> 
                    : null
                }
            </div>
            <SettingPage isOpen={isOpen} onClose={onBtnX} channelName={props.name} />
        </React.Fragment>
    );
}

export default ChannelItem;