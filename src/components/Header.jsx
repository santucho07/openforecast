/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../assets/styles/components/Header.scss';
import image from '../assets/static/weather-logo.png';

const Header = () => (
  <div className='fixedHeaderContainer containerNav'>
    <div className='headerWrapper wrapper'>
      <header>
        <a className='headerAnccord'>
          <img className='logo' src={image} alt='weather-logo.png' srcSet={image} width='50px' />
          <h2 className='headerTitle'>
            <span>Open</span>
            Weather
          </h2>
        </a>
      </header>
    </div>
  </div>
);

export default Header;
