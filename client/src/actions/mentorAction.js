import mentorsService from '../services/mentors'
import { baseApiUrl } from '../config'

export const initialiseMentors = () => {
  return async (dispatch) => {
    const mentors = await mentorsService.getAll(baseApiUrl)
    dispatch({
      type: 'INITIALISE_MENTORS',
      data: mentors,
    })
  }
}

export const createMentor = (newMentorDetails) => {
  return async (dispatch) => {
    const newMentor = await mentorsService.createNew(
      baseApiUrl,
      newMentorDetails
    )
    dispatch({
      type: 'NEW_MENTOR',
      data: newMentor,
    })
  }
}
