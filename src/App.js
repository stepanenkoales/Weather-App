import React, { useState, useEffect } from 'react';
import './App.css';
import { CitySelector } from './components/CitySelector';
import { Container } from 'react-bootstrap';
import {API_KEY, API_BASE_URL} from './apis/config';
// import { UseFetch } from './hooks/UseFetch';
import { WeatherList } from './components/WeatherList';


export const App = () => {
  
  const [data, setData] = useState(null);
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;
    //clear old search
    setData(null);
    setError(null);
    
    fetch(url)
    .then(response => response.json())
    .then(data =>  {
      (data.cod >= 300) ? setError(data.message) : setData(data)
    })
    .catch(error => setError(error))
   
  }, [url]);  
 

const getContent = () => {
    if (error) {
      return <h2>{`Error while fetching: ${error}`}</h2>; 
    } else if (!data) {
      return null; 
    } else {
      return <WeatherList weathers={data.list} />;
    }  
  };

  return (       
    <Container className="App">
      <CitySelector  onSearch={city => setUrl(`${ API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)}/>
      {getContent()}
    </Container>  
  );
}



