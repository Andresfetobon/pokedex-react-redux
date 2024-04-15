import axios from 'axios';
import { useState } from 'react';

const useFetch = baseUrl => {
  const [infoApi, setInfoApi] = useState();
  const [hassError, setHassError] = useState(false);

  const getApi = () => {
    axios
      .get(baseUrl)
      .then(res => {
        setInfoApi(res.data);
        setHassError(false);
      })
      .catch(err => {
        setHassError(true);
      });
  };

  return [infoApi, getApi, hassError, setInfoApi];
};

export default useFetch;
