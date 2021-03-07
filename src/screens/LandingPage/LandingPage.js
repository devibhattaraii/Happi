import React, {useState, useEffect} from 'react';
import ChatBubble from '../../components/ChatBubble';
import './LandingPage.css';

const DUMMY_DATA = ["Hey", "Hi", "hola"];

const LandingPage = () => {
    const [messageList, setMessageList] = useState(["HI"]);
    const [chatIndex, setChatIndex] = useState(0);
    const [userInput, setUserInput] = useState("");

    const handleKeypress = e => {
        //it triggers by pressing the enter key
        if (e.key === 'Enter') {
            setMessageList([...messageList, userInput]);
            setUserInput('');
      }
    };

    const MessageList = (props) => {
        const {messages} = props;
        return (messages.map((message) => (<ChatBubble text={message}/>)))
    }

    return (
        <div class="container">
            <div class="inner-container">
                <div class="message-container">
                    <MessageList messages={messageList}/>
                </div>
                <input class="inputBox" type="text" name="name" placeholder="Enter your message"
                    onChange={e => setUserInput(e.target.value)}
                    onKeyPress={handleKeypress}
                    value={userInput}
                />
            </div>
        </div>
    );
}

export default LandingPage;