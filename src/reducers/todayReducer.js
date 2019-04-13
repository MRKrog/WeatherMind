export const todayReducer = ( state = [], action) => {
  switch(action.type){
    case "SET_TODAY":
      return action.info
      break;
    default:
      return state
  }
}
