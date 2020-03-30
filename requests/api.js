import React, {useState, useEffect} from 'react'
import axios from 'axios';

export const useDataCardApi = (Url, Data) => {
    const [data, setData] = useState(Data);
    const [url, setUrl] = useState(Url);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await axios(url);
          setData(result.data);
        } catch (error) {
            console.log(error)
        }
      };
      fetchData();
    }, [url]);
    return [{ data }, setUrl];
}

// const result = axios(
//    'https://db.ygoprodeck.com/api/v6/cardinfo.php'
// );

export const axiosGet = (url, success, failure) => {
  if (typeof success === 'undefined') {
    success = () => {}
  }
  if (typeof failure === 'undefined') {
    failure = () => {}
  }
  axios.get(url)
    .then(success)
    .catch((failure) => {
      console.log(failure)
    });
}