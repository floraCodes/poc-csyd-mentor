import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import MentorsList from './pages/MentorsList'
import MentorDetails from './pages/MentorDetails'
import MentorForm from './pages/MentorForm'
import SearchAppBar from './components/Navbar'
import { initialiseMentors } from './actions/mentorAction'

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
}))

const App = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initialiseMentors())
  }, [dispatch])

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
            <MentorsList />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
