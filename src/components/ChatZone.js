import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../css/ChatZone.css';
import MessageBlock from './MessageBlock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import io from 'socket.io-client';

var messages = [];

const ChatZone = (props) => {
    const url = 'http://localhost:5000/channels';
    const [showMembers, setShowMembers] = useState(true);
    const [message, setMessage] = useState('');
    const [actSend, setActSend] = useState(false);
    const [channelData, setChannelData] = useState({});
    const [dataOk, setdataOk] = useState(false);

    var USER_ID = localStorage.getItem('_id');
    // const [channelId, setChannelId] = useState(sessionStorage.getItem('selected_channel'));
    useEffect(() => {
        var temp = sessionStorage.getItem('selected_channel');
        // setChannelId(temp);
        // console.log('channelId ' + channelId + ' temp ' + temp);
        // setChannelId(useSelector(state => state.SelectChannel));
        // console.log('watch ' + channelId);

        const data = {
            id: temp
        };
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
            setChannelData(data);
            setdataOk(true);
        });


    }, [useSelector(state => state.SelectChannel)])

    
    // useEffect(() => {
    //     const data = {
    //         id: channelId
    //     };
    //     fetch(url, {
    //         method: 'POST',
    //         mode: 'cors',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //     .then(res => res.json())
    //     .then(data => console.log(data));
        // console.log(channelData);
        
    // }, [])

    if (dataOk) {

        var MESSAGES = channelData.messages;
        console.log(MESSAGES);
        if (messages.length === 0) {
            for (var i = 0; i < MESSAGES.length; i++) {
                if (USER_ID === MESSAGES[i].user_id) {  //your message
                    messages.push(<MessageBlock type={2}
                                                text={MESSAGES[i].text} 
                                                key={MESSAGES[i]._id} />);
                } else if (i >=1 && MESSAGES[i].user_id === MESSAGES[i - 1].user_id) {  //not your message but own by the same friend 
                                                                                        //whose message rendered right before
                    messages.push(<MessageBlock type={3}
                                                text={MESSAGES[i].text} 
                                                key={MESSAGES[i]._id} />);
                } else {    //friend's message
            
                    messages.push(<MessageBlock type={1}
                                                text={MESSAGES[i].text} 
                                                key={MESSAGES[i]._id} />)
                }
            }
        }
    }

    const [messageItems, setMessageItems] = useState(messages);

    useEffect(() => {
        var mb = document.getElementsByClassName('messages-board__stick-bottom')[0];
        mb.scrollTop = mb.scrollHeight - mb.clientHeight; //messages board auto scroll bottom
        setActSend(false);  //set to false to prepare for catch state change for update scroll down AGAIN
    }, [actSend]);



    function handleSendMessage() {

        let d = new Date();
        let dtime = d.getTime();    //generate key for MessageBlock

        let formatedMessageText = formatText(message);

        messages.push(<MessageBlock type={2}
                                    text={formatedMessageText}
                                    key={dtime} />);
        setMessageItems(messages);
        setActSend(true);   //catch state change to update scorll down
        setMessage('');

    }

    function handleSpecialCase(e) {
        if (e.keyCode === 13 && !e.shiftKey) {
            e.preventDefault();
            e.target.innerHTML = '';
            handleSendMessage();
        }
    }

    function handleUserInput(e) {
        setMessage(e.target.innerHTML);
    }

    return (
        <div className='chat-zone'>
            <div className='chat-zone__head'>
                <h2 className='chat-zone__head__channel-name'>{channelData.name}</h2>
                <button className='showUsers-btn' onClick={() => setShowMembers(!showMembers)}>
                    <FontAwesomeIcon icon='users' />
                </button>
            </div>
            <div className='chat-zone__content'>
                <div className={'chat-zone__content__main' + (!showMembers ? ' chat-zone__content__main--active' : '')}>
                    <div className='messages-board'>
                        <div className='messages-board__stick-bottom'>
                            {messageItems}
                        </div>
                    </div>
                    <div className='message-bar'>

                        <div className='message-bar__finput'>

                            {message === '' 
                                ? <div className='message-bar__placeholder'>message...</div>
                                : null
                            }
                            
                            <div className='message-bar__input' 
                                 contentEditable='true'
                                 spellCheck='false'
                                 autoComplete='false'
                                 onInput={(e) => handleUserInput(e)}
                                 onKeyDown={(e) => handleSpecialCase(e)}></div>


                            <button className='paper-clip-btn'>
                                <FontAwesomeIcon icon='paperclip' />
                            </button>
                            <button className='message-image-btn'>
                                <FontAwesomeIcon icon='image' />
                            </button>
                            <button className='message-emoji-btn'>
                                <FontAwesomeIcon icon='laugh-squint' />
                            </button>


                        </div>
                    </div>
                </div>


                <div className={'chat-zone__content__side' + (showMembers ? ' chat-zone__content__side--active' : '')}></div>

            </div>
        </div>
    );
}

export default ChatZone;


function formatText(message) {
    var result = message.replace(/&nbsp;/g, ' ')
                        .replace(/<br>/g, '\n')
                        .trimEnd();
    return result;
}