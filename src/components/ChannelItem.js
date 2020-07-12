import React from 'react';
import { useDispatch } from 'react-redux';
import '../css/ChannelItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SettingPage from './SettingPage';
import { openChannelSetting, selectChannel } from '../actions';

const ChannelItem = (props) => {
    const disPatch = useDispatch();

    return (
        <React.Fragment>
            <div className='channel'>
                <p className='channel__name'>{props.name}</p>
                <button className='channel__invite'>
                    <FontAwesomeIcon icon='user-plus' />
                </button>
                <button className='channel__setting'
                        onClick={() => disPatch(openChannelSetting())}>
                    <FontAwesomeIcon icon='cog' />
                </button>
            </div>
            <SettingPage channelName={props.name} />
        </React.Fragment>
    );
}

export default ChannelItem;