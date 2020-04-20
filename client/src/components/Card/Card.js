import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Card.css'
import noPhotoIcon from '../../static/no-photo-icon.png'

const Card = ({ mentor }) => {
  const { fullName, title, id, photo, description } = mentor
  const mentorPhoto = photo
    ? `https://codesydney-website.s3-ap-southeast-2.amazonaws.com/mentor/${id}.png`
    : noPhotoIcon

  return (
    <Link to={`/mentor/${id}`}>
      <div className="mentor-card">
        <img
          className="mentor-photo"
          src={mentorPhoto}
          alt="some description"
        />
        <p>{fullName}</p>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </Link>
  )
}

Card.propTypes = {
  mentor: PropTypes.shape({
    fullName: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.string,
    photo: PropTypes.bool,
    description: PropTypes.string,
  }).isRequired,
}

export default Card
