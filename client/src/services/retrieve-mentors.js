import axios from 'axios'

export const retrieveMentors = () => (
  axios.get('http://localhost:5000/api/v1/mentors')
    .then(response => response.data.data.mentors)
    .catch(error => console.log(`some error: ${error}`))
)
