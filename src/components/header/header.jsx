import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div>
      <header className='header-container'>
        <div className='header__item'>1</div>
        <img className='neumorphism header__item' id='message' src="https://img.icons8.com/ios/24/000000/speech-bubble-with-dots.png" />
        <div className='header__item'>3</div>
        <div className='header__item'>4</div>
        <div className='header__item'>5</div>
      </header>
    </div>
  )
};

export default Header;
