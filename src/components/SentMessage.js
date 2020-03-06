import React from 'react';

import './SentMessage.css';

function SentMessage(props) {
    return (
        <div className="chat-message">
            <p className="sentMessage">{props.message}</p>
        </div>
    );
}

export default SentMessage;