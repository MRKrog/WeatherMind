export const weeklyReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_WEEK":
      return action.info
      break;
    default:
      return state
  }
}
