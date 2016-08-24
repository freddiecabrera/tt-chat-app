import React from 'react';
import { Link } from 'react-router';

const Header = (props) => (
  <div className='row nav-bar'>
    <div className='12 column'>
      <Link to='/'>
        <img className='logo' src='../../public/chat.svg' alt='logo'/>
      </Link>
    </div>
  </div>
);

export default Header;
