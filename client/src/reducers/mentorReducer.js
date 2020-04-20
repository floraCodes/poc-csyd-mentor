const mentorReducer = (state = [], action) => {
  switch (action.type) {
    case 'INITIALISE_MENTORS':
      return action.data
    default:
      return state
  }
}

export default mentorReducer
