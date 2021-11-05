import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { WeatherCard } from './WeatherCard'

export const WeatherList = (props) => {
    return (
        <Row>
           {props.weathers.map(({dt_txt, main, weather, dt}) => (
                <Col key={dt}>
                    <WeatherCard 
                    temp_max={main.temp_max} 
                    temp_min={main.temp_min} 
                    dt={dt_txt} 
                    main={weather[0].main} 
                    icon={weather[0].icon} 
                    />
                </Col>
            ))} 
        </Row>
    );
}