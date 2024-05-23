import React, {useState, Fragment} from 'react'
import styled from 'styled-components'

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

const FAQ = () => {
  const [activeAnswer, setActiveAnswer] = useState(null)

  const questionClickHandler = index => {
    if (activeAnswer === index) setActiveAnswer(null)
    else setActiveAnswer(index)
  }

  return (
    <Faq id="faq">
      <FaqContainer>
        <FaqHeading>Frequently Asked Questions</FaqHeading>
        <FaqContent>
          {faq.map((item, idx) => (
            <Fragment key={idx}>
              <FaqItem className={`${activeAnswer === idx ? 'activeFaq' : ''}`} key={idx}>
                <FaqItemQuestion
                  className="faqItemQuestion"
                  onClick={() => questionClickHandler(idx)}
                >
                  <p>{item.question}</p>
                  <FaqItemQuestionIcon className="faqItemQuestionIcon"></FaqItemQuestionIcon>
                </FaqItemQuestion>
                <FaqItemAnswer className="faqItemAnswer">
                  <p>{item.answer}</p>
                </FaqItemAnswer>
              </FaqItem>
              {idx !== faq.length - 1 && <Divider></Divider>}
            </Fragment>
          ))}
        </FaqContent>
      </FaqContainer>
    </Faq>
  )
}

export default FAQ

const Faq = styled.div`
  margin: 80px 0;
`
const FaqContainer = styled.div`
  max-width: 1200px;
  margin: auto;
`
const FaqHeading = styled.h1`
  text-align: center;
  padding: 20px;
  font-family: cursive;
  background: linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  font-size: 50px;
`
const FaqContent = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 14px;
`
const FaqItem = styled.div`
  padding: 18px 24px 10px 24px;

  &.activeFaq {
    .faqItemAnswer {
      max-height: 500px;
    }

    .faqItemQuestion {
      .faqItemQuestionIcon {
        transform: rotate(45deg);
      }
    }
  }
`

const FaqItemQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  gap: 8px;
  margin-bottom: 16px;

  p {
    flex-grow: 1;
    font-size: 1.125rem;
    line-height: 1.3125rem;
    font-weight: 600;
  }
`

const FaqItemQuestionIcon = styled.div`
  width: 8px;
  height: 8px;
  border-bottom: 3px solid #147eb7;
  border-right: 3px solid #147eb7;
  border-left: none;
  border-top: none;
  transform: rotate(-45deg);
`
const FaqItemAnswer = styled.div`
  max-height: 0;
  overflow: hidden;

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
