import React, {useState, useEffect} from 'react';
import ChatBubble from '../../components/ChatBubble';
import './LandingPage.css';

const CONVERSATION = [
    {
        text: `Hi There! Welcome to our website! My name is Chattie and I will be helping you today.`,
        wait: false,
        next: 1,
    },
    {
        text: `May I know your name?`,
        wait: true,
        next: 2,
    },
    {
        text: `Do you mind if I ask some questions to learn more about you?`,
        wait: true,
        next: 3,
    },
    {
        text: `Great! Let's get started then!`,
        wait: false,
        next: 4,
    },
    {
        text: `What stage of pregnancy are you in?`,
        wait: true,
        next: undefined,
    }
    ];

const LandingPage = () => {
    const [messageList, setMessageList] = useState([CONVERSATION[0]]);
    const [chatIndex, setChatIndex] = useState(0);
    const [userInput, setUserInput] = useState("");


    //called every second
    useEffect(() => {
        botMessage(false); 
    }, []);

    const botMessage = (trigger) => {
        // console.log(chatIndex);
        const msg = CONVERSATION[chatIndex];
        if(msg.next !== undefined && (msg.wait === false || trigger === true)){
            // console.log(true);
            const interval = setTimeout(() => {
                setMessageList([...messageList, CONVERSATION[msg.next]]);
                setChatIndex(msg.next);
            }, 1000);
        }
    };

    const userInputHander = (index, input) => {
        switch(index){
            case 2: {
                setMessageList([...messageList, {text: input, next: 3}]);
                break;
            }
            default: break;
        }
    }

    const handleKeypress = e => {
        //it triggers by pressing the enter key
        if (e.key === 'Enter') {
            userInputHander(chatIndex + 1, userInput);
            setUserInput('');
            setChatIndex(chatIndex + 1);
            botMessage(true);
      }
    };

    const MessageList = (props) => {
        const {messages} = props;
        return (messages.map((message) => (<ChatBubble text={message.text}/>)))
        // return (chatBubbles.map((message) => (<ChatBubble text={"h"}/>)))
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