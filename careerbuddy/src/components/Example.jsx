import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'
import styled from 'styled-components'
const Faq = styled.div`
  margin: 80px 0;
`
const FaqContainer = styled.div`
  //   max-width: 1200px;
  border-radius: 0px;
  margin: auto;
`
const FaqHeading = styled.h1`
  text-align: center;
  color: #0048ff;
  margin-bottom: 36px;
`
const FaqContent = styled.div`
  //   width: 70%;
  //   margin: auto;
  display: flex;
  border-radius: 0px;
  flex-direction: column;
  //   gap: 14px;
`
const FaqItem = styled.div`
  //   padding: 18px 24px 10px 24px;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  border-radius: 0px;
`
const FaqItemQuestion = styled.div`
  display: flex;
  border-radius: 0px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  gap: 8px;
  //   margin-bottom: 16px;

  p {
    flex-grow: 1;
    font-size: 1.125rem;
    line-height: 1.3125rem;
    font-weight: 600;
  }
`
const FaqItemAnswer = styled.div`
  //   max-height: 0;
  //   overflow: hidden;
  border-radius: 0px;
  p {
    /* color: rgba(60, 60, 67, 0.85); */
  }
`
const Divider = styled.div`
  height: 1px;
  width: 95%;
  background-color: #dfe3e8;
  margin: auto;
`
const faq = [
  {
    question: 'How does career counseling work?',
    answer:
      'Career counseling helps you to decide your next immediate step in your career. It involves counseling based on interest and past learnings. It can be appropriate for anyone including freshmen, sophomores, juniors, seniors, and even alumni.',
  },
  {
    question: 'Do I need anything before using this app?',
    answer:
      'No, you don’t need anything beforehand. It is a simple and easy-to-use application where you can find the way to your dream career or you can find the best-suited career for you based on your interest.',
  },
  {
    question: 'Is this counseling paid?',
    answer:
      'No, Automated counseling on this app is free. Only the 1-on-1 counseling can be paid based on the mentor.',
  },
  {
    question: 'How is this app useful for companies?',
    answer:
      'As our user base is mostly comprised of students, we can allow companies to promote their courses in return for some tier-based plan.',
  },
  {
    question: 'How can a teacher/guide make use of this application?',
    answer:
      'This app would allow the guide to provide mentorship and can generate revenue from it.',
  },
]

function Example() {
  const [isOpen, setIsOpen] = useState(Array(faq.length).fill(false))

  const toggleOpen = index => {
    const newIsOpen = [...isOpen]
    newIsOpen[index] = !newIsOpen[index]
    setIsOpen(newIsOpen)
  }

  return (
    <Faq>
      <FaqContainer>
        <FaqHeading>Frequently Asked Questions</FaqHeading>
        <FaqContent>
          {faq.map((item, idx) => (
            <FaqItem key={idx} style={{border: 'none'}}>
              <Button
                onClick={() => toggleOpen(idx)}
                aria-controls={idx}
                aria-expanded={isOpen[idx]}
                style={{borderRadius: '0px', width: '800px', border: '1px solid gray'}}
              >
                <FaqItemQuestion>
                  <p>{item.question}</p>
                </FaqItemQuestion>
              </Button>
              <Collapse in={isOpen[idx]}>
                {/* <FaqItemAnswer> */}
                <div id={idx}>
                  <FaqItemAnswer>{item.answer}</FaqItemAnswer>
                </div>
              </Collapse>
              {/* {idx !== faq.length - 1 && <Divider></Divider>} */}
            </FaqItem>
          ))}
        </FaqContent>
      </FaqContainer>
    </Faq>
  )
}

export default Example
