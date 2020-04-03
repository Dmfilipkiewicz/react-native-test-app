import axios from 'axios';

export const axiosGet = async (url, success, failure) => {
  console.log("GET")
  if (typeof success === 'undefined') {
    success = () => {}
  }
  if (typeof failure === 'undefined') {
    failure = () => {}
  }
  await axios.get(url)
    .then(success)
    .catch(failure);
}