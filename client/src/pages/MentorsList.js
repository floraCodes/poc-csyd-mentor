import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import './Page.css'

const MentorsList = () => {
  const { mentors } = useSelector((state) => state)

  return (
    <div className="wrapper mentorSummary">
      {mentors.length !== 0 &&
        mentors.map((mentor) => (
          <Card key={`card-${mentor.id}`} mentor={mentor} />
        ))}
    </div>
  )
}

export default MentorsList
