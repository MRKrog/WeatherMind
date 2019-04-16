import { detailsReducer } from '../detailsReducer'

const mockAction = {
  type: "SET_DETAILS",
  details: {
    city: "Denver",
    state: "Colorado",
    street: "1331 17th Street",
  }
}

describe('detailsReducer', () => {

  it('should return the initial state', () => {
    const expected = {}
    const result = detailsReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return the mockDetails object when type is SET_DETAILS', () => {
    const expected = { city: "Denver", state: "Colorado", street: "1331 17th Street" }
    const result = detailsReducer({}, mockAction)
    expect(result).toEqual(expected)
  })

})
