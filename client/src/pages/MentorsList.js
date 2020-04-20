import React from 'react'
import PropTypes from 'prop-types'
import Card from '../components/Card'
import './Page.css'

const MentorsList = ({ mentors }) => (
  <div className="wrapper">
    {mentors.map((mentor) => (
      <Card key={`card-${mentor.id}`} mentor={mentor} />
    ))}
  </div>
)

MentorsList.propTypes = {
  mentors: PropTypes.arrayOf(PropTypes.shape).isRequired,
}

export default MentorsList
