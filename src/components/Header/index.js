import React, { useState, useEffect } from 'react';

import { Link } from "react-router-dom";

import '../../styles/components/header.css';
import logoImg from '../../assets/logo.png';
import hamburguerButton from '../../assets/menu.svg';
import xButton from '../../assets/x.svg';

const Header = () => {

  const [ toggleMenuBoolean, setToggleMenu ] = useState(false);

  function toggleMenu() {
    setToggleMenu(!toggleMenuBoolean);
  }

  return (
    <header>
      <img id="logo" src={logoImg} alt="logo"/>
      <ul>
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#produtos">Vendas</a></li>
        <li><a href="#sobre">Sobre</a></li>
      </ul>
      {
        toggleMenuBoolean && (
          <div className="menu-mobile">
            <ul>
              <li><a onClick={toggleMenu} href="#servicos">Serviços</a></li>
              <li><a onClick={toggleMenu} href="#produtos">Vendas</a></li>
              <li><a onClick={toggleMenu} href="#sobre">Sobre</a></li>
            </ul>
          </div>
        )
      }

      {
        toggleMenuBoolean ? (
          <button type="button" onClick={toggleMenu} className='menu-button-inactive'><img src={hamburguerButton} alt="menu"/></button>
          ) : (
          <button type="button" onClick={toggleMenu} className='menu-button-active'><img src={hamburguerButton} alt="menu"/></button>
        )
      }
      {
        toggleMenuBoolean ? (
          <button type="button" onClick={toggleMenu} className='menu-button-active'><img src={xButton} alt="menu"/></button>
          ) : (
            <button type="button" onClick={toggleMenu} className='menu-button-inactive'><img src={xButton} alt="menu"/></button>
        )
      }
    </header>
  );
}

export default Header;
