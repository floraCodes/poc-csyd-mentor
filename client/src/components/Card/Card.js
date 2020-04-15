import React from 'react'
import './Card.css'
import noPhotoIcon from '../../static/no-photo-icon.png'

const Card = ({ mentor }) =>{
  const { fullName, title, id, photo, description } = mentor
  const mentorPhoto = photo ?
    `https://codesydney-website.s3-ap-southeast-2.amazonaws.com/mentor/${id}.png` :
    noPhotoIcon

  return(
    <div className="mentor-card">
      <img className="mentor-photo" src={mentorPhoto} />
      <p>{fullName}</p>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  )
}

export default Card
