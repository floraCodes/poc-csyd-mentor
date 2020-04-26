import axios from 'axios'

const getAll = async (apiUrl) => {
  const response = await axios.get(apiUrl)
  return response.data.data.mentors
}

const createNew = async (apiUrl, newMentor) => {
  const response = await axios.post(apiUrl, newMentor)
  return response.data.data.mentor
}

const deleteMentor = async (apiUrl, mentorId) => {
  await axios.delete(`${apiUrl}/${mentorId}`)
}

const editMentor = async (apiUrl, mentorId, updatedDetails) => {
  const response = await axios.put(`${apiUrl}/${mentorId}`, updatedDetails)
  return response.data.data.mentor
}

export default { getAll, createNew, deleteMentor, editMentor }
