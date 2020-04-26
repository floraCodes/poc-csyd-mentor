import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import MentorForm from './MentorForm'
import { editMentor } from '../actions/mentorAction'

const EditMentor = () => {
  const { id } = useParams()
  const { mentors } = useSelector((state) => state)
  const mentor = mentors.find((m) => m.id === id)

  const initialValues = {
    fullName: mentor.fullName,
    title: mentor.title,
    description: mentor.description
  }

  const dispatch = useDispatch()
  const history = useHistory()

  const updateMentor = (mentorInfo) => (event) => {
    event.preventDefault()
    dispatch(editMentor(id, mentorInfo))
    alert('Your details have been updated.')
    history.push('/')
  }

  return(
    <>
      <MentorForm
        initialValues = {initialValues}
        handleSubmit={updateMentor}
      />
    </>
  )
}

export default EditMentor
