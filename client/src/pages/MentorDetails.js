/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useParams } from 'react-router-dom'
import { retrieveMentor } from '../services/retrieve-mentors'
import './Page.css'
import noPhotoIcon from '../static/no-photo-icon.png'

const MentorDetails = ({ mentors }) => {
  // const [mentor, setMentor] = useState([])
  const { id } = useParams()
  // useEffect(() => {
  //   retrieveMentor(id).then((mentor) => setMentor(mentor))
  // }, [])

  // const mentor  = mentors.filter(mentor => mentor.id === id)

  const newMentor = mentors.find(mentor => mentor.id === id)
  console.log(newMentor)
  const { fullName, description, title, photo } = newMentor

  const mentorPhoto = photo
    ? `https://codesydney-website.s3-ap-southeast-2.amazonaws.com/mentor/${id}.png`
    : noPhotoIcon

  return (
    <div className="mentorpage">
      <div className="photo">
        <img className="mentorphoto" src={mentorPhoto} />
      </div>
      <div className="mentor-info">
        <p>
          Fullname: {fullName}
        </p>
        <p>
          Title: {title}
        </p>
        <p>
          Description: {description}
        </p>
      </div>
    </div>
  )
}
export default MentorDetails
