/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import '../assets/styles/components/Search.scss';

const Search = ({ name, country }) => {

  return (
    <div className='containerSearch'>
      <input
        type='text'
        name='searchWeather'
        id='searchWeather'
        placeholder='Search'
      />
      <h4 className='colorFont'>
        {name}
        ,
        {country}
      </h4>
    </div>
  );
};

export default Search;
