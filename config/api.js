import axios from 'axios';
const path = 'https://db.ygoprodeck.com/api/v6/cardinfo.php'

export const axiosGet = async (url) => {
  console.log("GET")
  try {
    const response = await axios.get(path+url)
    return response.data
  } catch {
    return false
  }
}