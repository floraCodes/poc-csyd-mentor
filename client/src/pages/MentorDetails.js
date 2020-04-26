import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import DetailsLayout from '../components/DetailsLayout'
import Button from '../components/Button'
import noPhotoIcon from '../static/no-photo-icon.png'
import { deleteMentor } from '../actions/mentorAction'
import './Page.css'

const MentorDetails = () => {
  const { id } = useParams()
  const { mentors } = useSelector((state) => state)
  const mentor = mentors.find((m) => m.id === id)

  const dispatch = useDispatch()
  const history = useHistory()

  const handleEdit = async (event) => {
    event.preventDefault()
    history.push(`/mentor/edit/${id}`)
  }

  const handleDelete = async (event) => {
    event.preventDefault()
    dispatch(deleteMentor(id))
    history.push('/')
  }

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
            <>
              <Button position="left" label="Edit" onClick={handleEdit} />
              <Button position="right" label="Delete" onClick={handleDelete} />
            </>
          }
        />
      )}
    </>
  )
}
export default MentorDetails
