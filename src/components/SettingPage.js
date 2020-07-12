import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../css/SettingPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { closeChannelSetting } from '../actions';

const SettingPage = (props) => {

    const openSetting = useSelector(state => state.channelSettingReducer);
    const disPatch = useDispatch();
    const [switchTab, setSwitchTab] = useState(0);

    const overviewTab = <div className='setting-page__content__inner'>
        <form>
            <label className='label-input' htmlFor='name'>name</label>
            <div className='cp-finput'>
                <input className='cp-finput__input' type='text' id='name' />
            </div>
            <label className='label-input' htmlFor='topic'>topic</label>
            <div className='cp-ftextarea'>
                <textarea className='cp-ftextarea__textarea' type='text' id='topic'></textarea>
            </div>
        </form>
        <button className='setting-page__close'
                onClick={() => disPatch(closeChannelSetting())}>
            <FontAwesomeIcon icon='times' />
        </button>
    </div>

    const manageTab = <div className='setting-page__content__inner'>
        <h2 className='setting-page__content__point'>members</h2>
        <div className='cp-finput cp-finput-w50 cp-finput-br50'>
            <input className='cp-finput__input' type='text' placeholder='Search...'/>
        </div>
        <ul className='user-list'>
            <li className='user-list__item'>
                <p className='user-list__item__name'>pen</p>
                <button className='user-list__item__delete'>
                    <FontAwesomeIcon icon='eraser'/>
                </button>
            </li>
            <li className='user-list__item'>
                <p className='user-list__item__name'>eraser</p>
                <button className='user-list__item__delete'>
                    <FontAwesomeIcon icon='eraser'/>
                </button>
            </li>
        </ul>
        <button className='setting-page__close'
                onClick={() => disPatch(closeChannelSetting())}>
            <FontAwesomeIcon icon='times' />
        </button>
    </div>

    const statisticTab = <div className='setting-page__content__inner'>
        some chartjs here
        <button className='setting-page__close'
                onClick={() => disPatch(closeChannelSetting())}>
            <FontAwesomeIcon icon='times' />
        </button>
    </div>

    var contentDisplay = overviewTab;
    switch(switchTab) {
        case 0: 
            contentDisplay = overviewTab;
            break;
        case 1:
            contentDisplay = manageTab;
            break;
        case 2: 
            contentDisplay = statisticTab;
            break;
        default:
            break;
    }

    return (
        <div className={'setting-page' + (openSetting ? ' setting-page--active' : '')}>
            <div className='setting-page__nav'>
                <h1 className='setting-page__title'>{props.channelName}</h1>
                <ul>
                    <li className={'setting-page__nav__item center-line' + (switchTab === 0 ? 
                                                                            ' setting-page__nav__item--active':'')}
                        onClick={() => setSwitchTab(0)}>
                        <div>overview</div>
                    </li>
                    <li className={'setting-page__nav__item center-line' + (switchTab === 1 ?
                                                                            ' setting-page__nav__item--active' : '')}  
                        onClick={() => setSwitchTab(1)}>
                        <div>manage</div>
                    </li>
                    <li className={'setting-page__nav__item center-line' + (switchTab === 2 ?
                                                                            ' setting-page__nav__item--active' : '')}  
                        onClick={() => setSwitchTab(2)}>
                        <div>statistic</div>
                    </li>
                </ul>
                <button className='setting-page__delete'>delete channel</button>
            </div>
            <div className='setting-page__content'>
                {contentDisplay}
            </div>
        </div>
    );
}

export default SettingPage;