import React from 'react'
import Card from '../components/Card'

const MentorsList = ({ mentors }) => {
  return (
    <div>
      {mentors.map((mentor) => (
        <Card mentor={mentor} />
      ))}
    </div>
  )
}

export default MentorsList