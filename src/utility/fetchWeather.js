
export const fetchWeather = async (url) => {
  try {
    const response = await fetch(url)
    if(!response.ok) { throw new Error('Bad Call')}
    const data = await response.json()
  } catch (error) {
    console.log(error.message);
  }
}
