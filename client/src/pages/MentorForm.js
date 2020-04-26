/* eslint-disable react/jsx-wrap-multilines */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DetailsLayout from '../components/DetailsLayout'
import Button from '../components/Button'
import noPhotoIcon from '../static/no-photo-icon.png'

const MentorForm = ({ handleSubmit, initialValues}) => {
  const [fullName, setFullName] = useState(initialValues.fullName)
  const [title, setTitle] = useState(initialValues.title)
  const [description, setDescription] = useState(initialValues.description)
  const [photo, setPhoto] = useState(false)

  const mentorInfo = {
    fullName,
    title,
    description,
    photo,
  }

  return (
    <form onSubmit={handleSubmit(mentorInfo)}>
      <DetailsLayout
        image={
          <img className="photo" src={noPhotoIcon} alt="some description" />
        }
        fullName={
          <input
            name="fullName"
            placeholder="Your full name"
            value={fullName}
            onChange={({ target }) => setFullName(target.value)}
          />
        }
        title={
          <input
            name="title"
            placeholder="Your title"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        }
        description={
          <textarea
            rows="13"
            name="description"
            value={description}
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
