import React, {useState} from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';


export const CitySelector = (props) => {
  const [city, setCity] = useState('');
 
  return (
    <>
      <Row>
        <Col>
          <h1>Search your city</h1>
        </Col>
      </Row>

      <Row>
        <Col xs={4} className="text-center">
          <FormControl
            placeholder="Enter city"
            onChange={event => setCity(event.target.value)}
            value={city}
            //onKeyDown={onKeyDown}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={() => props.onSearch(city)}>Check Weather</Button>
        </Col>
      </Row>
    </>
  );
};