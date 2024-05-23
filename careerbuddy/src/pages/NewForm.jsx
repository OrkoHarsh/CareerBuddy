import React, {Fragment, useState} from 'react'
import styled from 'styled-components'
import Slider from 'react-input-slider'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import axios from 'axios'
import {jobTitle, softSkillMapping} from 'utils/constant'

const Container = styled.div``
const Form = styled.form`
  height: fit-content;
  width: 50%;
  margin: 30px 0px;
  background-color: pink;
  margin-left: auto;
  margin-right: auto;
  border-radius: 15px;
  padding: 30px;
  background-color: rgba(126, 138, 245, 0.16);
`
const InputName = styled.p`
  font-size: 15px;
  font-weight: 500;
  padding: 10px 0px;
`
const Title = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  padding: 20px;
  text-align: center;

  color: #002b9a;
`
const Button = styled.button`
  font-size: 18px;
  padding: 8px 20px;
  margin: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;

  background: #2666cf;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`

const Result = styled.div`
  font-size: 18px;
  padding: 8px 20px;
  margin: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  margin: auto;
  color: #2666cf;
  margin-top: 20px;
`
const SoftSkillContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
`

const SoftSkill = styled.div`
  display: flex;
  margin: 10px 0px;
  margin-right: 10px;
  color: white;
  background-color: rgb(38, 152, 27, 0.6);
  padding: 2px 6px;
  border-radius: 8px;
`

function NewForm() {
  const [formData, setFormData] = useState({
    logical_skills: 0,
    hackathons: 0,
    coding_skills: 0,
    public_speaking: 0,
    self_learning: '',
    extra_courses: '',
    certifications: '',
    workshops: '',
    reading_writing: '',
    capability: '',
    interestSub: '',
    interestArea: '',
    companyType: '',
    elders: '',
    bookType: '',
    prefer: '',
    believe: '',
    team: '',
    introvert: '',
  })

  const [result, setResult] = useState('')
  const [softSkills, setSoftSkills] = useState([])

  const handleSubmit = async e => {
    e.preventDefault()
    console.log(formData)
    const body = {
      Skill1: parseInt(formData.logical_skills),
      Skill2: parseInt(formData.hackathons),
      Skill3: parseInt(formData.coding_skills),
      Skill4: parseInt(formData.public_speaking),
      Skill5: parseInt(formData.self_learning),
      Skill6: parseInt(formData.extra_courses),
      Skill7: parseInt(formData.certifications),
      Skill8: parseInt(formData.workshops),
      Skill9: parseInt(formData.reading_writing),
      Skill10: parseInt(formData.capability),
      Skill11: parseInt(formData.interestSub),
      Skill12: parseInt(formData.interestArea),
      Skill13: parseInt(formData.companyType),
      Skill14: parseInt(formData.elders),
      Skill15: parseInt(formData.bookType),
      Skill16: parseInt(formData.prefer),
      Skill17: parseInt(formData.believe),
      Skill18: parseInt(formData.team),
      Skill19: parseInt(formData.introvert),
    }

    const res = await axios.post('https://careerbuddy-ml.onrender.com/predict_it_career', body)
    const score = res.data.prediction
    for (const i in jobTitle) {
      if (jobTitle[i] === score) {
        setResult(i)
        setSoftSkills(softSkillMapping[i].split(','))
      }
    }
  }
  return (
    <>
      <Navbar />
      <Container>
        <Title>Your Friendly Career Advisor</Title>
        <Form onSubmit={handleSubmit}>
          {/* Skill1 */}
          <InputName>Enter your Logical skills level</InputName>
          <Fragment>
            <div>{formData.logical_skills}</div>
            <Slider
              style={{width: '100%'}}
              axis="x"
              xstep={1}
              xmin={0}
              xmax={10}
              x={formData.logical_skills}
              required
              onChange={({x}) =>
                setFormData(prev => ({...prev, logical_skills: parseFloat(x.toFixed(2))}))
              }
            />
          </Fragment>

          {/* Skill2 */}
          <InputName>How much hackathons have you attended?</InputName>
          <Fragment>
            <div>{formData.hackathons}</div>
            <Slider
              style={{width: '100%'}}
              axis="x"
              xstep={1}
              xmin={0}
              xmax={10}
              x={formData.hackathons}
              required
              onChange={({x}) =>
                setFormData(prev => ({...prev, hackathons: parseFloat(x.toFixed(2))}))
              }
            />
          </Fragment>

          {/* Skill3 */}
          <InputName>Rate your coding skills</InputName>
          <Fragment>
            <div>{formData.coding_skills}</div>
            <Slider
              style={{width: '100%'}}
              axis="x"
              xstep={1}
              xmin={0}
              xmax={10}
              x={formData.coding_skills}
              required
              onChange={({x}) =>
                setFormData(prev => ({...prev, coding_skills: parseFloat(x.toFixed(2))}))
              }
            />
          </Fragment>

          {/* Skill4 */}
          <InputName>How much do you rate yourself in public speaking?</InputName>
          <Fragment>
            <div>{formData.public_speaking}</div>

            <Slider
              style={{width: '100%'}}
              axis="x"
              xstep={1}
              xmin={0}
              xmax={10}
              x={formData.public_speaking}
              onChange={({x}) =>
                setFormData(prev => ({...prev, public_speaking: parseFloat(x.toFixed(2))}))
              }
              required
            />
          </Fragment>

          {/* Skill5 */}
          <InputName>Do you have self learning capacity?</InputName>
          <select
            style={{
              width: '100%',
              height: '30px',
              borderRadius: '8px',
            }}
            value={formData.self_learning}
            onChange={e => setFormData(prev => ({...prev, self_learning: e.target.value}))}
            required
          >
            <option default disabled value="">
              Do you?
            </option>
            <option value={1}>Yes</option>
            <option value={0}>No</option>
          </select>

          {/* Skill6 */}
          <InputName>Have you done any extra course?</InputName>
          <select
            style={{
              width: '100%',
              height: '30px',
              borderRadius: '8px',
            }}
            required
            value={formData.extra_courses}
            onChange={e => setFormData(prev => ({...prev, extra_courses: e.target.value}))}
          >
            <option default disabled value="">
              Do you?
            </option>
            <option value={1}>Yes</option>
            <option value={0}>No</option>
          </select>

          {/* Skill7 */}
          <InputName>What type of certifications do you have?</InputName>
          <select
            style={{
              width: '100%',
              height: '30px',
              borderRadius: '8px',
            }}
            required
            value={formData.certifications}
            onChange={e => setFormData(prev => ({...prev, certifications: e.target.value}))}
          >
            <option default disabled value="">
              select your certifications
            </option>
            {Object.keys({
              'information security': 0,
              'shell programming': 1,
              'r programming': 2,
              'distro making': 3,
              'machine learning': 4,
              'full stack': 5,
              hadoop: 6,
              'app development': 7,
              python: 8,
            }).map((op, idx) => (
              <option value={idx}>{op}</option>
            ))}
          </select>

          {/* Skill8 */}
          <InputName>What type of workshops you like to attend?</InputName>
          <select
            style={{
              width: '100%',
              height: '30px',
              borderRadius: '8px',
            }}
            required
            value={formData.workshops}
            onChange={e => setFormData(prev => ({...prev, workshops: e.target.value}))}
          >
            <option default disabled value="">
              select your favorable workshop type
            </option>
            {Object.keys({
              testing: 0,
              'database security': 1,
              'game development': 2,
              'data science': 3,
              'system designing': 4,
              hacking: 5,
              'cloud computing': 6,
              'web technologies': 7,
            }).map((op, idx) => (
              <option value={idx}>{op}</option>
            ))}
          </select>

          {/* Skill9 */}
          <InputName>How are your reading and writing skills?</InputName>
          <select
            style={{
              width: '100%',
              height: '30px',
              borderRadius: '8px',
            }}
            required
            value={formData.reading_writing}
            onChange={e => setFormData(prev => ({...prev, reading_writing: e.target.value}))}
          >
            <option default disabled value="">
              rate your reading and writing skills
            </option>
            {Object.keys({poor: 0, medium: 2, excellent: 1}).map((op, idx) => (
              <option value={idx}>{op}</option>
            ))}
          </select>

          {/* Skill10 */}
          <InputName>Your memory capability score?</InputName>
          <select
            style={{
              width: '100%',
              height: '30px',
              borderRadius: '8px',
            }}
            required
            value={formData.capability}
            onChange={e => setFormData(prev => ({...prev, capability: e.target.value}))}
          >
            <option default disabled value="">
              Choose your memory capability score
            </option>
            {Object.keys({poor: 0, medium: 2, excellent: 1}).map((op, idx) => (
              <option value={idx}>{op}</option>
            ))}
          </select>

          {/* Skill11 */}
          <InputName>Interested Subjects</InputName>
          <select
            style={{
              width: '100%',
              height: '30px',
              borderRadius: '8px',
            }}
            required
            value={formData.interestSub}
            onChange={e => setFormData(prev => ({...prev, interestSub: e.target.value}))}
          >
            <option default disabled value="">
              Choose your interested subjects
            </option>
            {Object.keys({
              programming: 0,
              Management: 1,
              'data engineering': 2,
              networks: 3,
              'Software Engineering': 4,
              'cloud computing': 5,
              'parallel computing': 6,
              IOT: 7,
              'Computer Architecture': 8,
              hacking: 9,
            }).map((op, idx) => (
              <option value={idx}>{op}</option>
            ))}
          </select>

          {/* Skill12 */}
          <InputName>Interested Career Area</InputName>
          <select
            style={{
              width: '100%',
              height: '30px',
              borderRadius: '8px',
            }}
            required
            value={formData.interestArea}
            onChange={e => setFormData(prev => ({...prev, interestArea: e.target.value}))}
          >
            <option default disabled value="">
              Choose Career
            </option>
            {Object.keys({
              testing: 0,
              'system developer': 1,
              'Business process analyst': 2,
              security: 3,
              developer: 4,
              'cloud computing': 5,
            }).map((op, idx) => (
              <option value={idx}>{op}</option>
            ))}
          </select>

          {/* Skill13 */}
          <InputName>Type of company you want to settle in?</InputName>
          <select
            style={{
              width: '100%',
              height: '30px',
              borderRadius: '8px',
            }}
            required
            value={formData.companyType}
            onChange={e => setFormData(prev => ({...prev, companyType: e.target.value}))}
          >
            <option default disabled value="">
              Select your choice
            </option>
            {Object.keys({
              BPA: 0,
              'Cloud Services': 1,
              'product development': 2,
              'Testing and Maintainance Services': 3,
              'SAaS services': 4,
              'Web Services': 5,
              Finance: 6,
              'Sales and Marketing': 7,
              'Product based': 8,
              'Service Based': 9,
            }).map((op, idx) => (
              <option value={idx}>{op}</option>
            ))}
          </select>

          {/* Skill14 */}
          <InputName>Take advice from elders?</InputName>
          <select
            style={{
              width: '100%',
              height: '30px',
              borderRadius: '8px',
            }}
            required
            value={formData.elders}
            onChange={e => setFormData(prev => ({...prev, elders: e.target.value}))}
          >
            <option default disabled value="">
              Do you?
            </option>
            <option value={1}>Yes</option>
            <option value={0}>No</option>
          </select>

          {/* Skill15 */}
          <InputName>Types of books you like to read</InputName>
          <select
            style={{
              width: '100%',
              height: '30px',
              borderRadius: '8px',
            }}
            required
            value={formData.bookType}
            onChange={e => setFormData(prev => ({...prev, bookType: e.target.value}))}
          >
            <option default disabled value="">
              Interested in
            </option>
            {Object.keys({
              Series: 0,
              Autobiographies: 1,
              Travel: 2,
              Guide: 3,
              Health: 4,
              Journals: 5,
              Anthology: 6,
              Dictionaries: 7,
              'Prayer books': 8,
              Art: 9,
              Encyclopedias: 10,
              'Religion-Spirituality': 11,
              'Action and Adventure': 12,
              Comics: 13,
              Horror: 14,
              Satire: 15,
              'Self help': 16,
              History: 17,
              Cookbooks: 18,
              Math: 19,
              Biographies: 20,
              Drama: 21,
              Diaries: 22,
              'Science fiction': 23,
              Poetry: 24,
              Romance: 25,
              Science: 26,
              Trilogy: 27,
              Fantasy: 28,
              Childrens: 29,
              Mystery: 30,
            }).map((op, idx) => (
              <option value={idx}>{op}</option>
            ))}
          </select>

          {/* Skill16 */}
          <InputName>What do you prefer?</InputName>
          <select
            style={{
              width: '100%',
              height: '30px',
              borderRadius: '8px',
            }}
            required
            value={formData.prefer}
            onChange={e => setFormData(prev => ({...prev, prefer: e.target.value}))}
          >
            <option default disabled value="">
              Management or Technical
            </option>
            {Object.keys({Management: 0, Technical: 1}).map((op, idx) => (
              <option value={idx}>{op}</option>
            ))}
          </select>

          {/* Skill17 */}
          <InputName>You believe in?</InputName>
          <select
            style={{
              width: '100%',
              height: '30px',
              borderRadius: '8px',
            }}
            required
            value={formData.believe}
            onChange={e => setFormData(prev => ({...prev, believe: e.target.value}))}
          >
            <option default disabled value="">
              Choose what you believe in
            </option>
            {Object.keys({'smart work': 0, 'hard work': 1}).map((op, idx) => (
              <option value={idx}>{op}</option>
            ))}
          </select>

          {/* Skill18 */}
          <InputName>Worked in teams ever?</InputName>
          <select
            style={{
              width: '100%',
              height: '30px',
              borderRadius: '8px',
            }}
            required
            value={formData.team}
            onChange={e => setFormData(prev => ({...prev, team: e.target.value}))}
          >
            <option default disabled value="">
              Select your option?
            </option>
            <option value={1}>Yes</option>
            <option value={0}>No</option>
          </select>

          {/* Skill19 */}
          <InputName>Are you an Introvert?</InputName>
          <select
            style={{
              width: '100%',
              height: '30px',
              borderRadius: '8px',
            }}
            required
            value={formData.introvert}
            onChange={e => setFormData(prev => ({...prev, introvert: e.target.value}))}
          >
            <option default disabled value="">
              Are you?
            </option>
            <option value={1}>Yes, I'm</option>
            <option value={0}>No, I'm not</option>
          </select>

          <Button type="submit">Submit</Button>
          {result ? (
            <>
              <Result>
                You can pursue career in: {'   '} <u>{result}</u>
              </Result>
              <div
                className=""
                style={{
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <p>Some Skills that you can learn to excel:</p>
                <SoftSkillContainer>
                  {softSkills.map((skill, idx) => (
                    <SoftSkill key={idx}>{skill}</SoftSkill>
                  ))}
                </SoftSkillContainer>
              </div>
            </>
          ) : null}
        </Form>
      </Container>
      <Footer />
    </>
  )
}

export default NewForm
