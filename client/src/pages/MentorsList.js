import React from 'react'
import PropTypes from 'prop-types'
import Card from '../components/Card'

const MentorsList = ({ mentors }) => {
  return (
    <div>
      {mentors.map((mentor) => (
        <Card key={`card-${mentor.id}`} mentor={mentor} />
      ))}
    </div>
  )
}

MentorsList.propTypes = {
  mentors: PropTypes.arrayOf(PropTypes.shape).isRequired,
}

export default MentorsList
