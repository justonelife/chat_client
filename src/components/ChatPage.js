import React, { useEffect } from 'react';
import io from 'socket.io-client';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import Dashboard from './Dashboard';
import ChatZone from './ChatZone';
import '../css/ChatPage.css';

const USER_ID = "5f088b614629907bfa196494";

// const MESSAGES = [
//     {
//         _id : "5f0a76c99408a7dc2a24419d",
//         user_id : "5f0a6f889408a7dc2a24419b",
//         channel_id : "5f0a76c99408a7dc2a2441a0",
//         text : 'hi everyone',
//         send_date : "Sun Jul 12 2020 09:34:49 GMT+0700 (SE Asia Standard Time)"
//     }, 
//     {
//         _id : "5f0a76c99408a7dc2a24419e",
//         user_id : "5f0a6f889408a7dc2a24419c",
//         channel_id : "5f0a76c99408a7dc2a2441a0",
//         text : 'hi pen',
//         send_date : "Sun Jul 12 2020 09:34:49 GMT+0700 (SE Asia Standard Time)"
//     }, 
//     {
//         _id : "5f0a76c99408a7dc2a24419f",
//         user_id : "5f088b614629907bfa196494",
//         channel_id : "5f0a76c99408a7dc2a2441a0",
//         text : 'hi pen',
//         send_date : "Sun Jul 12 2020 09:34:49 GMT+0700 (SE Asia Standard Time)"
//     },
//     {
//         _id : "5f0a76c99408a7dc2a24",
//         user_id : "5f088b614629907bfa196494",
//         channel_id : "5f0a76c99408a7dc2a2441a0",
//         text : 'Contrary to popular belief, Lorem Ipsum is not simply random textContrary to popular belief, Lorem Ipsum is not simply random textContrary to popular belief, Lorem Ipsum is not simply random textContrary to popular belief, Lorem Ipsum is not simply random textContrary to popular belief, Lorem Ipsum is not simply random textContrary to popular belief, Lorem Ipsum is not simply random textContrary to popular belief, Lorem Ipsum is not simply random textContrary to popular belief, Lorem Ipsum is not simply random textContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
//         send_date : "Sun Jul 12 2020 09:34:49 GMT+0700 (SE Asia Standard Time)"
//     },
//     {
//         _id : "5f0a768a7fsdfsdfdc2a24",
//         user_id : "5f0829907bfa196494",
//         channel_id : "5f0a76c99408a7dc2a2441a0",
//         text : 'Contrary to popular belief, Lorem Ipsum is not simply random textContrary to popular belief, Lorem Ipsum is not simply random textContrary to popular belief, Lorem Ipsum is not simply random textContrary to popular belief, Lorem Ipsum is not simply random textContrary to popular belief, Lorem Ipsum is not simply random textContrary to popular belief, Lorem Ipsum is not simply random textContrary to popular belief, Lorem Ipsum is not simply random textContrary to popular belief, Lorem Ipsum is not simply random textContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
//         send_date : "Sun Jul 12 2020 09:34:49 GMT+0700 (SE Asia Standard Time)"
//     }
// ]


const CHANNELS = [
    {
        _id: "5f0a76c99408a7dc2a2441a0",
        name: "general",
        members: [
            "5f0a6f889408a7dc2a24419c",
            "5f0a6f889408a7dc2a24419b",
            "5f088b614629907bfa196494"
        ],
        messages: [
            {
                _id: "5f0a76c99408a7dc2a24419d",
                user_id: "5f0a6f889408a7dc2a24419b",
                text: "hi everyone",
                send_date: "Sun Jul 12 2020 09:34:49 GMT+0700 (SE Asia Standard Time)"
            },
            {
                _id: "5f0a76c99408a7dc2a24419e",
                user_id: "5f0a6f889408a7dc2a24419c",
                text: "hi pen",
                send_date: "Sun Jul 12 2020 09:34:49 GMT+0700 (SE Asia Standard Time)"
            },
            {
                _id: "5f0a76c99408a7dc2a24419f",
                user_id: "5f088b614629907bfa196494",
                text: "hi pen",
                send_date: "Sun Jul 12 2020 09:34:49 GMT+0700 (SE Asia Standard Time)"
            },
            {
                _id : "5f0a76c99408a7dc2a24",
                user_id : "5f088b614629907bfa196494",
                text : 'Contrary to popular belief, Lorem Ipsum is not simply random textContrary to popular belief, Lorem Ipsum is not simply random textContrary to popular belief, Lorem Ipsum is not simply random textContrary to popular belief, Lorem Ipsum is not simply random textContrary to popular belief, Lorem Ipsum is not simply random textContrary to popular belief, Lorem Ipsum is not simply random textContrary to popular belief, Lorem Ipsum is not simply random textContrary to popular belief, Lorem Ipsum is not simply random textContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
                send_date : "Sun Jul 12 2020 09:34:49 GMT+0700 (SE Asia Standard Time)"
            },
            {
                _id : "5f0a768a7fsdfsdfdc2a24",
                user_id : "5f0829907bfa196494",
                text : 'Contrary to popular belief, Lorem Ipsum is not simply random textContrary to popular belief, Lorem Ipsum is not simply random textContrary to popular belief, Lorem Ipsum is not simply random textContrary to popular belief, Lorem Ipsum is not simply random textContrary to popular belief, Lorem Ipsum is not simply random textContrary to popular belief, Lorem Ipsum is not simply random textContrary to popular belief, Lorem Ipsum is not simply random textContrary to popular belief, Lorem Ipsum is not simply random textContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
                send_date : "Sun Jul 12 2020 09:34:49 GMT+0700 (SE Asia Standard Time)"
            }
        ]
    },
    {
        _id: "5f0a77f09408a7dc2a2441a1",
        name: "javascript",
        members: [],
        messages: []
    }
];

const ChatPage = () => {

    //general
    // var userChoice = "5f0a76c99408a7dc2a2441a0";

    //javascript
    var userChoice = "5f0a77f09408a7dc2a2441a1";
    //check send message [hello hello] repeat*20 in this empty channel

    //dashboard
    // var userChoice = '';

    var display = undefined;

    if (userChoice === '') {
        display = <Dashboard />;
    } else {
        var temp = CHANNELS.filter(val => val._id === userChoice);
        display = <ChatZone user_id={USER_ID} messages={temp[0].messages} />;
    }

    // const logState = useSelector(state => state.logStateReducer);
    // const channelsData = useSelector(state => state.saveChannelsReducer);
    // console.log('logState ' + logState);
    // console.log('channels 1 id ' + channelsData[0]._id);
    // console.log('channels 2 id ' + channelsData[1]._id);


    useEffect(() => {
        var socket = io('http://localhost:5000');
    });

    if (true) {
        return (
            <div className='chat-page'>
                <NavBar />
                {/* <ChatZone user_id={USER_ID} messages={CHANNELS[0].messages} /> */}
                {display}
            </div>
        );
    } else {
        return (
            <Redirect to="/" />
        );
    }
    
    
}

export default ChatPage;