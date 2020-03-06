import React from 'react';

import './ReceivedMessage.css';

function ReceivedMessage (props) {
    return (
    <div className="chat-message">
        <div className="userName">{props.user.username}</div>
        <img src={props.user.avatar} alt=""/>
        <p className="receivedMessage">{props.message}</p>
    </div>
    );
}

export default ReceivedMessage;