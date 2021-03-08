import React from 'react';
import './ChatBubble.css';

const ChatBubble = (props) => {
    return(
        <div class="ChatBubble">
            {props.text}
        </div>
    )
}

export default ChatBubble;