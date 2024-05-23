import React from 'react'
import Chatbot from 'react-simple-chatbot'
const steps = [
  {
    id: '1',
    message: 'What is your name?',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Hi {previousValue}, nice to meet you!',
    trigger: '4',
  },
  {
    id: '4',
    user: true,
    trigger: '5',
  },
  {
    id: '5',
    message: 'To become a lawyer you have to do BA LLB',
    trigger: '6',
  },
  {
    id: '6',
    user: true,
    trigger: '7',
  },
  {
    id: '7',
    message: 'I would like to suggest you to user our ml tool',
    trigger: '8',
  },
  {
    id: '8',
    user: true,
    trigger: '9',
  },
  {
    id: '9',
    message: 'Anything else?',
    trigger: '10',
  },
  {
    id: '10',
    user: true,
    trigger: '11',
  },
  {
    id: '11',
    message: 'You have to do btech for that, for more information use our info page',
    end: true,
  },
]
function MyChatbot() {
  return (
    <div>
      <Chatbot
        steps={steps}
        recognitionEnable={true}
        floating={true}
        speechSynthesis={{enable: true, lang: 'en'}}
        // end ={false}
      />
    </div>
  )
}

export default MyChatbot
