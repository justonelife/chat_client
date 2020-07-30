import React, { useState } from 'react';
import '../css/ChannelItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SettingPage from './SettingPage';

const ChannelItem = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    function onBtnX() {
        setIsOpen(false);
    }

    return (
        <React.Fragment>
            <div className='channel center-line'>
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