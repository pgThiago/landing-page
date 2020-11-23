import React, { useState } from 'react';

import '../../styles/components/header.css';
import logoImg from '../../assets/logo.png';
import hamburguerButton from '../../assets/menu.png';
import xButton from '../../assets/x.png';

const Header = () => {

  const [ toggleMenuBoolean, setToggleMenu ] = useState(false);
  
  function toggleMenu() {
    setToggleMenu(!toggleMenuBoolean);
  }

  return (
    <header>
      <img id="logo" src={logoImg} alt="logo"/>
      {
        toggleMenuBoolean && (
          <div className="menu-mobile">
            <ul>
              <li><a className="menu-mobile-link-item" onClick={toggleMenu} href="#servicos">Serviços</a></li>
              <li><a className="menu-mobile-link-item" onClick={toggleMenu} href="#produtos">Vendas</a></li>
              <li><a className="menu-mobile-link-item" onClick={toggleMenu} href="#sobre">Sobre</a></li>
            </ul>
          </div>
        )
      }
      {
        toggleMenuBoolean ? (
          <button type="button" onClick={toggleMenu} className='menu-x-button-active'><img src={xButton} alt="menu"/></button>
          ) : (
          <button type="button" onClick={toggleMenu} className='menu-button-active'><img src={hamburguerButton} alt="menu"/></button>
        )
      }
    </header>
  );
}

export default Header;
