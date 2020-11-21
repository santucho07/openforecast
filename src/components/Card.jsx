/* eslint-disable camelcase */
import React from 'react';
import '../assets/styles/components/Card.scss';

const Card = (item) => {
  return (
    <section>
      <ul className='container__data'>
        <li>
          {item.date}
        </li>
        <li>{`Hora: ${item.time}`}</li>
        <li>{`Temperatura Máxima: ${Math.round(item.main.temp_max)}`}</li>
        <li>{`Temperatura Mínima: ${Math.round(item.main.temp_min)}.`}</li>
        <li>{`Sensación Térmica ${Math.round(item.main.feels_like)}`}</li>
        <li>{`Porcentaje de Humedad %${Math.round(item.main.humidity)}`}</li>
      </ul>
      <ul className='container__iconic__data'>
        <li>{item.weather[0].description}</li>
        <li><img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt='' srcSet={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} /></li>
      </ul>
    </section>
  );
};
export default Card;
