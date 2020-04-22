import axios from 'axios'

export const retrieveMentors = (apiUrl) =>
  axios
    .get(apiUrl)
    .then((response) => response.data.data.mentors)
    .catch((error) => Promise.reject(error))

// export const retrieveMentor = (id) => (
//   axios
//     .get(`http://localhost:5000/api/v1/mentors/${id}`)
//     .then(response => response.data.data.mentor)
//     .catch(error => console.log(`some error: ${error}`))
//   )