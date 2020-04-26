const mentorReducer = (state = [], action) => {
  switch (action.type) {
    case 'INITIALISE_MENTORS':
      return action.data
    case 'NEW_MENTOR':
      return [...state, action.data]
    case 'DELETE_MENTOR':
      const updatedState = state.filter(mentor => mentor.id !== action.data)
      return [...updatedState]
    case 'EDIT_MENTOR':
      const filteredState = state.filter(mentor => mentor.id !== action.data.id)
      return [...filteredState, action.data]
    default:
      return state
  }
}

export default mentorReducer
