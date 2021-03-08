import React from 'react';
import { ConversationalForm } from 'conversational-form';
import { connect } from 'react-redux';
import { setName, setMood, setPregnancy, setReason } from '../store/userSlice'

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.formFields = [
      {
        tag: 'input',
        type: 'text',
        name: 'name',
        'cf-questions': 'May I know your name?',
      },
      {
        tag: 'input',
        type: 'radio',
        name: 'yes',
        'cf-questions':
          'Do you mind if I ask some questions to learn more about you?',
        'cf-label': 'Nope',
        value: 'yes',
      },
      {
        tag: 'input',
        type: 'radio',
        name: 'yes',
        'cf-label': 'Go Ahead',
        value: 'yes',
      },
      {
        tag: 'input',
        type: 'radio',
        name: 'pregnancy',
        'cf-questions': `Great! Let's get started. What stage of pregnancy are you in?`,
        'cf-label': 'First Trimester (1-12 weeks)',
        value: 'first',
      },
      {
        tag: 'input',
        type: 'radio',
        name: 'pregnancy',
        'cf-label': 'Second trimester (13-27 weeks)',
        value: 'second',
      },
      {
        tag: 'input',
        type: 'radio',
        name: 'pregnancy',
        'cf-label': 'Third trimester (28-40) weeks',
        value: 'second',
      },
      {
        tag: 'input',
        type: 'radio',
        name: 'pregnancy',
        'cf-label': 'Postpartum',
        value: 'postpartum',
      },
      {
        tag: 'input',
        type: 'radio',
        name: 'mood',
        'cf-questions': `I see. How are you feeling today?`,
        'cf-label': 'Good',
        'cf-image': 'https://openmoji.org/data/color/svg/1F60C.svg',
        tabindex: '1',
        value: 'good',
      },
      {
        tag: 'input',
        type: 'radio',
        name: 'mood',
        'cf-questions': `I see. How are you feeling today?`,
        'cf-label': 'Meh',
        'cf-image': 'https://openmoji.org/data/color/svg/1F610.svg',
        tabindex: '2',
        value: 'meh',
      },
      {
        tag: 'input',
        type: 'radio',
        name: 'mood',
        'cf-questions': `I see. How are you feeling today?`,
        'cf-label': 'Sad',
        'cf-image': 'https://openmoji.org/data/color/svg/1F641.svg',
        tabindex: '3',
        value: 'sad',
      },
      {
        tag: 'input',
        type: 'radio',
        name: 'mood',
        'cf-questions': `I see. How are you feeling today?`,
        'cf-label': 'Anxious',
        'cf-image': 'https://openmoji.org/data/color/svg/1F630.svg',
        tabindex: '4',
        value: 'anxious',
      },
      {
        tag: 'input',
        type: 'text',
        name: 'reason',
        'cf-questions': 'Could you tell me why you feel that way?',
      },
    ];

    this.submitCallback = this.submitCallback.bind(this);
  }

  componentDidMount() {
    this.cf = ConversationalForm.startTheConversation({
      options: {
        theme: 'purple',
        submitCallback: this.submitCallback,
        preventAutoFocus: true,
        loadExternalStyleSheet: true,
        robotImage: 'https://i.imgur.com/ABkIEPH.png',
      },
      tags: this.formFields,
    });
    this.cf.addRobotChatResponse(
      'Hi There! Welcome to our website! My name is Happi and I will be helping you today.'
    );
    this.elem.appendChild(this.cf.el);
  }

  submitCallback() {
    var formDataSerialized = this.cf.getFormData(true);
    console.log('Formdata, obj:', formDataSerialized);
    console.log(formDataSerialized.pregnancy[0]);
    this.props.setName(formDataSerialized.name);
    this.props.setMood(formDataSerialized.mood[0]);
    this.props.setReason(formDataSerialized.reason);
    this.props.setPregnancy(formDataSerialized.pregnancy[0]);
    this.cf.addRobotChatResponse(
      'Thanks for telling me! I have some helpful results for you, go to the Conditions page to see!'
    );
  }

  render() {
    return (
      // <div style={{ height: 100, backgroundColor: 'black' }}>
      <div ref={(ref) => (this.elem = ref)} style={{ marginTop: 10 }} />
      // </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      setName: (name) => dispatch(setName(name)),
      setMood: (name) => dispatch(setMood(name)),
      setPregnancy: (name) => dispatch(setPregnancy(name)),
      setReason: (name) => dispatch(setReason(name)),
  }
};
export default connect(null, mapDispatchToProps)(MyForm);