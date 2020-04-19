import React, { useState, useEffect } from 'react'
import MentorsList from './pages/MentorsList'
import { retrieveMentors } from './services/retrieve-mentors'
import SearchAppBar from './components/Navbar'
import { baseApiUrl } from './config'

const App = () => {
  const [mentors, setMentors] = useState([])

  useEffect(() => {
    retrieveMentors(baseApiUrl).then((allMentors) => setMentors(allMentors))
  }, [])

  return (
    <div>
      <SearchAppBar />
      <MentorsList mentors={mentors} />
    </div>
  )
}

export default App
