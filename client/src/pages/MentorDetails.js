/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Page.css'
import './Detail.css'
import noPhotoIcon from '../static/no-photo-icon.png'

const MentorDetails = () => {
  const { id } = useParams()
  const { mentors } = useSelector((state) => state)
  const mentor = mentors.find((m) => m.id === id)

  return (
    <div className="wrapper">
      {mentor && (
        <>
          <p>{mentor.fullName}</p>
          <p>{mentor.title}</p>
          <p>{mentor.description}</p>
        </>
      )}
    </div>
  )
}
export default MentorDetails
