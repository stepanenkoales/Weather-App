// custom hook UseFetch

import {useState, useEffect} from 'react';

export const UseFetch = (initialUrl) => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {

    setIsLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setData(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
      // dependency array 
  }, [url]);

  return { data, error, isLoading, setUrl };
};

