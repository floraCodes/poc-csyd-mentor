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
