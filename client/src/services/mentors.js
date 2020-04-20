import axios from 'axios'

const getAll = async (apiUrl) => {
  const response = await axios.get(apiUrl)
  return response.data.data.mentors
}

export default { getAll }
