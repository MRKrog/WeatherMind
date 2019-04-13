export const currentlyReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_CURRENT":
      return action.info
    default:
      return state
  }
}
