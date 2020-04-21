/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import DetailsLayout from '../components/DetailsLayout'
import Button from '../components/Button'
import noPhotoIcon from '../static/no-photo-icon.png'
import './Page.css'

const MentorDetails = () => {
  const { id } = useParams()
  const { mentors } = useSelector((state) => state)
  const mentor = mentors.find((m) => m.id === id)

  return (
    <>
      {mentor && (
        <DetailsLayout
          image={
            <img className="photo" src={noPhotoIcon} alt="some description" />
          }
          fullName={mentor.fullName}
          title={mentor.title}
          description={mentor.description}
          buttons={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <>
              <Button position="left" label="Edit" />
              <Button position="right" label="Delete" />
            </>
          }
        />
      )}
    </>
  )
}
export default MentorDetails
