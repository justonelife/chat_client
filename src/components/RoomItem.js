import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ChannelItem from './ChannelItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/RoomItem.css';
import '../css/general.css';
import '../css/UserInfoManager.css';

const RoomItem = (props) => {
    const name = props.name;
    const channelsList = props.channelsList;
    // const [channelsList, setChannelsList] = useState(props.channelsList);
    const selectedChannel = useSelector(state => state.SelectChannel);
    var selectedChannelItem = null;
    var channelItems = [];
    const [showChannels, setShowChannels] = useState(true);
    const [showCreateChannelModal, setCreateChannelModal] = useState(false);
    const [newChannelName, setNewChannelName] = useState('');

    channelsList.forEach(val => channelItems.push(<ChannelItem name={val.name}
                                                               type={val.type}
                                                               id={val._id}
                                                               key={val._id} />));
                 
    //for collapse display only selected channel
    if (selectedChannel) {
        let temp = channelsList.find(val => val._id === selectedChannel);
        //event trigger involve to other RoomItem
        if (temp) selectedChannelItem = <ChannelItem    name={temp.name}
                                                        type={temp.type}
                                                        id={temp._id} />;
    }

    function handleCollapseClick() {
        setShowChannels(state => !state);
    }
    function handleCreateChannelBtnClick(e) {
        //stop propagation to div room-item
        e.stopPropagation();
        setCreateChannelModal(true);

    }
    function hideCreateChannelModal(e) {
        setCreateChannelModal(false);
    }
    function handleNewChannelNameOnChange(e) {
        setNewChannelName(e.target.value);
    }
    function addNewChannel() {
        console.log(newChannelName);
    }

    return (
        <div className='mb-35'>
            <div className='room-item noselect'
                 onClick={handleCollapseClick}>
                <button className='room-item__caretBtn'>
                    {
                        showChannels 
                            ? <FontAwesomeIcon icon='caret-down' />
                            : <FontAwesomeIcon icon='caret-right' />
                    }
                </button>
                <h1 className='room-item__name'>{name}</h1>
                <button className='room-item__plusBtn'
                        onClick={handleCreateChannelBtnClick}>
                    <FontAwesomeIcon icon='plus' />
                </button>
            </div>

            <div className='channels-list'>
                {showChannels
                    ? channelItems
                    : selectedChannelItem
                }
            </div>

            { showCreateChannelModal && 
                <div className='createChannel'>
                    <div className='createChannel__cnt'> 
                        <div className='createChannel__cnt__modal'>
                            <div className='changePass-window__head'>

                                <ul className='macYnBtn float-right'>
                                    <li className='macYnBtn__btnWr'>
                                        <button className='macYnBtn__btn macYnBtn__btn--purple'
                                                onClick={addNewChannel}>
                                            <FontAwesomeIcon icon='check' />
                                        </button>
                                    </li>
                                    <li className='macYnBtn__btnWr'>
                                        <button className='macYnBtn__btn macYnBtn__btn--grey'
                                                onClick={(e) => hideCreateChannelModal(e)}>
                                            <FontAwesomeIcon icon='times' />
                                        </button>
                                    </li>
                                </ul>

                            </div>
                            <form className='block'>
                                <label htmlFor='channel_name' className='block__label createChannel__cnt__modal__label'>channel name</label>
                                <div className='block__finput createChannel__cnt__modal__finput'>
                                    <input  className='block__finput__input' 
                                            type='text' 
                                            id='channel_name'
                                            onChange={(e) => handleNewChannelNameOnChange(e)}/>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default RoomItem;