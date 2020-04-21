/* eslint-disable react/jsx-wrap-multilines */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import DetailsLayout from '../components/DetailsLayout'
import Button from '../components/Button'
import noPhotoIcon from '../static/no-photo-icon.png'
import { createMentor } from '../actions/mentorAction'

const MentorForm = () => {
  const [fullName, setFullName] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [photo, setPhoto] = useState(false)

  const dispatch = useDispatch()
  const history = useHistory()

  const addMentor = async (event) => {
    event.preventDefault()
    const newMentorDetails = {
      fullName,
      title,
      description,
      photo,
    }
    dispatch(createMentor(newMentorDetails))
    history.push('/')
  }

  return (
    <form onSubmit={addMentor}>
      <DetailsLayout
        image={
          <img className="photo" src={noPhotoIcon} alt="some description" />
        }
        fullName={
          <input
            name="fullName"
            placeholder="Your full name"
            onChange={({ target }) => setFullName(target.value)}
          />
        }
        title={
          <input
            name="title"
            placeholder="Your title"
            onChange={({ target }) => setTitle(target.value)}
          />
        }
        description={
          <textarea
            rows="13"
            name="description"
            placeholder="Share something about yourself..."
            onChange={({ target }) => setDescription(target.value)}
          />
        }
        buttons={
          <>
            <Button type="submit" position="left" label="Save" />
            <Link to="/">
              <Button position="right" label="Cancel" />
            </Link>
          </>
        }
      />
    </form>
  )
}

export default MentorForm
