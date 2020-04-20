import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import MentorsList from './pages/MentorsList'
import MentorDetails from './pages/MentorDetails'
import MentorForm from './pages/MentorForm'
import SearchAppBar from './components/Navbar'
import { retrieveMentors } from './services/retrieve-mentors'
import { baseApiUrl } from './config'

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
}))

const App = () => {
  const classes = useStyles()
  const [mentors, setMentors] = useState([])

  useEffect(() => {
    retrieveMentors(baseApiUrl).then((allMentors) => setMentors(allMentors))
  }, [])

  return (
    <Router>
      <SearchAppBar />
      <div>
        <div className={classes.toolbar} />
        <Switch>
          <Route path="/mentor/create">
            <MentorForm />
          </Route>
          <Route path="/mentor/:id">
            <MentorDetails />
          </Route>
          <Route exact path="/">
            <MentorsList mentors={mentors} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
