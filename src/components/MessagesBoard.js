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

    
    // useEffect(() => {
    //     socket.on('message', function(id, message, time, url) {
    //         // console.log('count');
    //         // setMessages([...messages, { id, message, time, url }]);
    //         setMessages(messages => [...messages, { id, message, time, url }]);

    //         // var temp = messages.slice(0, messages.length);
    //         // temp.push({ id, message, time, url });
    //         // console.log(temp);
    //         // setMessages(messages => temp);
    //         // setCount(count => count + 1);
    //         // console.log(count);

    //         // let newState = [...messages, { id, message, time, url }];
    //         // setMessages(newState);
    //         // setMessages(messages => messages.concat({ id, message, time, url }));
    //         // console.log(messages);
    //     });
    //     // console.log(messages);
    // }, [])

    
    // socket.on('testing', function() {
    //     console.log('count');
    // });
    // console.log('messages board');
    console.log(messages);

    useEffect(() => {
        var mb = document.getElementsByClassName('messages-board__stick-bottom')[0];
        mb.scrollTop = mb.scrollHeight - mb.clientHeight; //messages board auto scroll bottom
        // setActSend(false);  //set to false to prepare for catch state change for update scroll down AGAIN
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