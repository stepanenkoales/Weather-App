import React from 'react';
import {Card} from 'react-bootstrap';

// props {dt, temp_min, temp_max, main, icon}
export const WeatherCard = (props) => {
  
  // const date = new Date(props.dt);
  return (
    <Card >
      <Card.Img
        variant="top"
        src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
      />
      <Card.Body>
        <Card.Title>{props.main}</Card.Title>
        <p>
          {props.dt}
        </p>
        <p>Min: {props.temp_min}</p>
        <p>Max: {props.temp_max}</p>
      </Card.Body>
    </Card>
  );
};