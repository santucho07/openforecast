/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Card from '../components/Card';
import ContainerCard from '../components/Container-Card';
import Layout from '../components/Layout';
import Search from '../components/Search';
import '../assets/styles/App.scss';
import config from '../../config/conf';
import useInitialState from '../hooks/useInitialState';

const URI = `http://api.openweathermap.org/data/2.5/forecast?q=Cordoba&mode=json&units=metric&lang=es&appid=106dd74d9f3740246398915bdd62b5cf`;

const App = () => {
  console.log(config.API_URL);
  console.log(config.API_KEY);
  const initialState = useInitialState(URI);
  return (
    <Layout>
      <Search {...initialState.city} obj />
      <ContainerCard>
        {initialState.list &&
          initialState.list.map((item) => {
            const options = {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            };
            const parseTime = new Date(item.dt_txt)
              .toLocaleString('es-AR')
              .substr(11);
            const parseDate = new Date(item.dt_txt)
              .toLocaleString('es-AR', options)
              .substr(0, 31);
            return (
              <Card key={item.dt} date={parseDate} time={parseTime} {...item} />
            );
          })}
      </ContainerCard>
    </Layout>
  );
};

export default App;
