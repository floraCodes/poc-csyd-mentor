/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { retrieveMentor } from '../services/retrieve-mentors'
import './Page.css'
import noPhotoIcon from '../static/no-photo-icon.png'

const MentorDetails = () => {
  const [mentor, setMentor] = useState([])
  const { id } = useParams()
  useEffect(() => {
    retrieveMentor(id).then((mentor) => setMentor(mentor))
  }, [id])
  const mentorPhoto = mentor.photo
    ? `https://codesydney-website.s3-ap-southeast-2.amazonaws.com/mentor/${mentor.id}.png`
    : noPhotoIcon

  return (
    <div className="mentorpage">
      <div className="photo">
        <img className="mentorphoto" src={mentorPhoto} />
      </div>
      <div className="mentor-info">
        <p>
          Fullname: {mentor.fullName}
        </p>
        <p>
          Title: {mentor.title}
        </p>
        <p>
          Description: {mentor.description}
        </p>
      </div>
    </div>
  )
}
export default MentorDetails
