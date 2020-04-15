import React, { useState, useEffect } from 'react'
import MentorsList from './pages/MentorsList'
import { retrieveMentors } from './services/retrieve-mentors'

const App = () => {
  const [mentors, setMentors] = useState([])

  useEffect(() => {
    retrieveMentors()
      .then(mentors => setMentors(mentors))
  }, [])

  return (
    <div>
      <MentorsList mentors={mentors} />
    </div>
  );
}

export default App;
