import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import MentorForm from './MentorForm'
import { createMentor } from '../actions/mentorAction'

const NewMentor = () => {
  const initialValues = {
    fullName: '',
    title: '',
    description: ''
  }

  const dispatch = useDispatch()
  const history = useHistory()

  const addMentor = (mentorInfo) => (event) => {
    event.preventDefault()
    dispatch(createMentor(mentorInfo))
    history.push('/')
  }

  return(
    <>
      <MentorForm
        initialValues = {initialValues}
        handleSubmit={addMentor}
      />
    </>
  )
}

export default NewMentor
