import React, {useState, useEffect} from 'react';
import { Conversation, Select, Question, Option } from 'react-conversation-form';
import ChatBubble from '../../components/ChatBubble';
import './LandingPage.css';
import botImg from '../../assets/chatbot.png'

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
            setMessageList([...messageList, CONVERSATION[msg.next]]);
            setChatIndex(msg.next);
        }
    };

    const userInputHander = (index, input) => {
        console.log(input);
        setMessageList([...messageList, {text: input, next: 3}]);

        // switch(index){
        //     case 2: {
        //         setMessageList([...messageList, {text: input, next: 3}]);
        //         break;
        //     }
        //     default: break;
        // }
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
        <div class="container ">
            <img src={botImg} style={{height: 100}}/>
            <div class="inner-container" >
                <Conversation
                    className="conversation"
                    onSubmit={() => {}}
                    chatOptions={{
                        introText: 'Hi There! Welcome to our website! My name is Happi and I will be helping you today.',
                        submitText: 'Take care!'
                    }}
                >
                    <Question className="question" id="identifier" validation="^[a-zA-Z ]+$">
                        What's your name?
                    </Question>
                    <Select id="yes" question="Do you mind if I ask some questions to learn more about you?">
                        <Option value="issue">Nope</Option>
                        <Option value="typo">Go ahead</Option>
                    </Select>
                    <Select id="pregnancy" question="Great! What stage of pregnancy are you in?">
                        <Option value="issue">First trimester (1-12 weeks)</Option>
                        <Option value="issue">Second trimester (13-27 weeks)</Option>
                        <Option value="issue">Third trimester (28-40 weeks)</Option>
                        <Option value="issue">Postpartum</Option>
                    </Select>
                </Conversation>
            </div>
        </div>
    );
}

export default LandingPage;