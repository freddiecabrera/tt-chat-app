import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from './Header';

const Landing = props => (
  <div className='container-fluid'>
    <div className='bgImageContainer'>
      <img src='https://hd.unsplash.com/photo-1423784346385-c1d4dac9893a' alt='background-image' className='bgImage'/>
    </div>
    <Header />
    <div className='search-button-container'>
      <Link to='/chat'><button className='search-button'>Chat Now!</button></Link>
    </div>
  </div>
);

export default Landing;
