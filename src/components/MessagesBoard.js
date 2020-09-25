import React, { useEffect } from 'react';
import '../css/ChatZone.css';
import MessageBlock from './MessageBlock';

const MessagesBoard = (props) => {
    const USER_ID = localStorage.getItem('_id');
    // const [messages, setMessages] = useState([]);
    const messages = props.messages;
    var messageItems = [];

    for (var i = 0; i < messages.length; i++) {
        if (USER_ID === messages[i].user_id) {  //your message
            messageItems.push(<MessageBlock type={2}
                                        text={messages[i].text} 
                                        key={messages[i]._id}          
                                        avatarFilename={messages[i].user_id} />);    
        } else if (i >=1 && messages[i].user_id === messages[i - 1].user_id) {  //not your message but own by the same friend 
                                                                                //whose message rendered right before
            messageItems.push(<MessageBlock type={3}
                                        text={messages[i].text} 
                                        key={messages[i]._id}
                                        avatarFilename={messages[i].user_id} />);
        } else {    //friend's message
    
            messageItems.push(<MessageBlock type={1}
                                        text={messages[i].text} 
                                        key={messages[i]._id}
                                        avatarFilename={messages[i].user_id} />)
        }
    }


    useEffect(() => {
        var mb = document.getElementsByClassName('messages-board__stick-bottom')[0];
        mb.scrollTop = mb.scrollHeight - mb.clientHeight; //messages board auto scroll bottom
    });


    

    return (
        <div className='messages-board'>
            <div className='messages-board__stick-bottom'>
                {messageItems}
            </div>
        </div>
    );
}

export default MessagesBoard;