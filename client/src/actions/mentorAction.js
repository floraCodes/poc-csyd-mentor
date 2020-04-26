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

export const deleteMentor = (mentorId) => {
  return async (dispatch) => {
    await mentorsService.deleteMentor(baseApiUrl, mentorId)
    dispatch({
      type: 'DELETE_MENTOR',
      data: mentorId
    })
  }
}

export const editMentor = (mentorId, updatedMentorDetails) => {
  return async (dispatch) => {
    await mentorsService.editMentor(baseApiUrl, mentorId, updatedMentorDetails)
    updatedMentorDetails.id = mentorId
    dispatch({
      type: 'EDIT_MENTOR',
      data: updatedMentorDetails
    })
  }
}
