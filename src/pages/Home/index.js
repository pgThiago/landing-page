import React from 'react';

import Header from '../../components/Header';

import wppIcon from '../../assets/wpp-icon.png';
import '../../styles/pages/home.css';

// ========================================================================
const Home = () => {
  return (
    <div className="home-container" >
      <Header />

      <div className="landing-content">
        <div id="wpp-link-container">
          <img id="wpp-icon" src={wppIcon} alt="whatsapp"/>
          <a href={`https://google.com`}>91 9 9999-9999</a>
        </div>
        
        <span className="typing">Conserto e venda de alto-falantes</span>
      </div>

      <section id="produtos" name="produtos" className="products">
        <h3>À venda</h3>
      </section>

      <main className="grid-container">
        
        <div className="grid-item">
          <img src="https://picsum.photos/500/500?random=1" alt="alto-falante"/>
          <span className="preco">R$ 500,00</span>
          <span>Alto-falantes Eros, 12 polegadas, 4hm, automotivo, 800RMS.</span>
        </div> 
        <div className="grid-item">
          <img src="https://picsum.photos/500/500?random=2" alt="alto-falante"/>
          <span className="preco">R$ 1000,00</span>
          <span>Alto-falantes Eros, 12 polegadas, 4hm, automotivo, 800RMS.</span>
        </div> 
        <div className="grid-item">
          <img src="https://picsum.photos/500/500?random=3" alt="alto-falante"/>
          <span className="preco">R$ 1500,00</span>
          <span>Alto-falantes Eros, 12 polegadas, 4hm, automotivo, 800RMS.</span>
        </div>      
        <div className="grid-item">
          <img src="https://picsum.photos/500/500?random=4" alt="alto-falante"/>
          <span className="preco">R$ 2000,00</span>
          <span>Alto-falantes Eros, 12 polegadas, 4hm, automotivo, 800RMS.</span>
        </div>
        <div className="grid-item">
          <img src="https://picsum.photos/500/500?random=5" alt="alto-falante"/>
          <span className="preco">R$ 2500,00</span>
          <span>Alto-falantes Eros, 12 polegadas, 4hm, automotivo, 800RMS.</span>
        </div>
        <div className="grid-item">
          <img src="https://picsum.photos/500/500?random=6" alt="alto-falante"/>
          <span className="preco">R$ 3000,00</span>
          <span>Alto-falantes Eros, 12 polegadas, 4hm, automotivo, 800RMS.</span>
        </div>
        <div className="grid-item">
          <img src="https://picsum.photos/500/500?random=7" alt="alto-falante"/>
          <span className="preco">R$ 3500,00</span>
          <span>Alto-falantes Eros, 12 polegadas, 4hm, automotivo, 800RMS.</span>
        </div>
        <div className="grid-item">
          <img src="https://picsum.photos/500/500?random=8" alt="alto-falante"/>
          <span className="preco">R$ 4000,00</span>
          <span>Alto-falantes Eros, 12 polegadas, 4hm, automotivo, 800RMS.</span>
        </div>
        <div className="grid-item">
          <img src="https://picsum.photos/500/500?random=9" alt="alto-falante"/>
          <span className="preco">R$ 4500,00</span>
          <span>Alto-falantes Eros, 12 polegadas, 4hm, automotivo, 800RMS.</span>
        </div>
        <div className="grid-item">
          <img src="https://picsum.photos/500/500?random=10" alt="alto-falante"/>
          <span className="preco">R$ 5000,00</span>
          <span>Alto-falantes Eros, 12 polegadas, 4hm, automotivo, 800RMS.</span>
        </div>
        <div className="grid-item">
          <img src="https://picsum.photos/500/500?random=11" alt="alto-falante"/>
          <span className="preco">R$ 5500,00</span>
          <span>Alto-falantes Eros, 12 polegadas, 4hm, automotivo, 800RMS.</span>
        </div>
        <div className="grid-item">
          <img src="https://picsum.photos/500/500?random=12" alt="alto-falante"/>
          <span className="preco">R$ 6000,00</span>
          <span>Alto-falantes Eros, 12 polegadas, 4hm, automotivo, 800RMS.</span>
        </div>
        <div className="grid-item">
          <img src="https://picsum.photos/500/500?random=13" alt="alto-falante"/>
          <span className="preco">R$ 7500,00</span>
          <span>Alto-falantes Eros, 12 polegadas, 4hm, automotivo, 800RMS.</span>
        </div>
        <div className="grid-item">
          <img src="https://picsum.photos/500/500?random=14" alt="alto-falante"/>
          <span className="preco">R$ 8000,00</span>
          <span>Alto-falantes Eros, 12 polegadas, 4hm, automotivo, 800RMS.</span>
        </div>
        <div className="grid-item">
          <img src="https://picsum.photos/500/500?random=15" alt="alto-falante"/>
          <span className="preco">R$ 8500,00</span>
          <span>Alto-falantes Eros, 12 polegadas, 4hm, automotivo, 800RMS.</span>
        </div>
        <div className="grid-item">
          <img src="https://picsum.photos/500/500?random=16" alt="alto-falante"/>
          <span className="preco">R$ 9000,00</span>
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
