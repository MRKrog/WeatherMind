export const setWeather = (weather) => ({
  type: "SET_WEATHER",
  weather
})

export const setCurrent = (info) => ({
  type: "SET_CURRENT",
  info
})

export const setDetails = (details) => ({
  type: "SET_DETAILS",
  details,
})

export const setHourly = (info) => ({
  type: "SET_HOURLY",
  info
})

export const setToday = (info) => ({
  type: "SET_TODAY",
  info
})

export const setWeek = (info) => ({
  type: "SET_WEEK",
  info
})

export const setError = (error) => ({
  type: "SET_ERROR",
  error
})

export const setLoading = (loading) => ({
  type: "SET_LOADING",
  loading
})
