import React from 'react';

import Header from '../../components/Header';

import wppIcon from '../../assets/wpp-icon.png';
import '../../styles/pages/home.css';

// Imagens dos produtos
import altoFalante01 from '../../vendas-images/alto-falante-eros-01.jpg';

// ========================================================================
const Home = () => {
  return (
    <div className="home-container" >
      <Header />

      <div className="landing-content">
        <div id="wpp-link-container">
          <img id="wpp-icon" src={wppIcon} alt="whatsapp"/>
          <a href={`https://google.com`}>91 9 9999-9999</a>
          {/* <a href={`https://wa.me/+5591982444207`}>91 9 8244-4207</a> */}
        </div>
        
        <span className="typing">Conserto e venda de alto-falantes🔊</span>
      </div>

      <section id="produtos" name="produtos" className="products">
        <h3>À venda</h3>
      </section>

      <main className="grid-container">
        
        <div className="grid-item">
          <img src={altoFalante01} alt="alto falante"/>
          <span className="preco">R$ 800,00</span>
          <span>Alto-falantes Eros, 12 polegadas, 4hm, automotivo, 800RMS.</span>
        </div> 
        <div className="grid-item">
          <img src={altoFalante01} alt="alto falante"/>
          <span className="preco">R$ 800,00</span>
          <span>Alto-falantes Eros, 12 polegadas, 4hm, automotivo, 800RMS.</span>
        </div> 
        <div className="grid-item">
          <img src={altoFalante01} alt="alto falante"/>
          <span className="preco">R$ 800,00</span>
          <span>Alto-falantes Eros, 12 polegadas, 4hm, automotivo, 800RMS.</span>
        </div>      
        <div className="grid-item">
          <img src={altoFalante01} alt="alto falante"/>
          <span className="preco">R$ 800,00</span>
          <span>Alto-falantes Eros, 12 polegadas, 4hm, automotivo, 800RMS.</span>
        </div>
       
      </main>

      <section id="servicos" name="servicos" className="services">
        <h3>Serviços</h3>
      </section>
      
      <div className="services-content">
        <div className="service-item">
          <p>Conserto de alto falantes, ST e H10.</p>
        </div>  
        <div className="service-item">
          <p>Pintura e construção de caixas de som.</p>
        </div>
        <div className="service-item">
          <p>Compra e venda de eletrônicos.</p>
        </div>
      </div>

      <section id="sobre" name="sobre" className="sobre">
        <h3>Sobre</h3>
      </section>
      
      <div className="sobre-content">
        <p>
          Paulo Som, localizado no bairro do Aurá - Anita Gerosa, em Ananindeua, 
          possui mais de 25 anos de experiência em manutenção de alto-falantes, ST, H10,
          construção de caixas de som e peças relacionadas.
        </p>
        <p>
          Se você mora em ananindeua ou região e está com problemas em seus aparelhos,
          entre em contato via <a href={`https://google.com`}>WhatsApp</a>, vamos conversar.
          {/* entre em contato via <a href={`https://wa.me/+5591982444207`}>WhatsApp</a> para mais informações. */}
        </p>
      </div>

      <footer>
        <div className="direitos-container">
          <div className="direitos">
            <p> &copy; Paulo Som</p>
            <p>Todos os direitos reservados</p>
          </div>
          <p>Desenvolvido por <a href="https://github.com/pgthiago">Thiago Silva</a> </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
