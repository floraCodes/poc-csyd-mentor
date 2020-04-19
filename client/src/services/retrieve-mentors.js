import axios from 'axios'

export const retrieveMentors = (apiUrl) =>
  axios
    .get(apiUrl)
    .then((response) => response.data.data.mentors)
    .catch((error) => Promise.reject(error))
