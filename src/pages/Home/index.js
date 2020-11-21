import React from 'react';

import Header from '../../components/Header';

import wppIcon from '../../assets/wpp-icon.png';
import '../../styles/pages/home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Header />

      <div className="landing-content">
        <div id="wpp-link-container">
          <img id="wpp-icon" src={wppIcon} alt="whatsapp"/>
          <a href={`https://wa.me/+5591983659681`}>91 9 9999-9999</a>
        </div>
        
        <span className="typing">Consertos e vendas de alto falantes🔊</span>
      </div>

      <section id="produtos" name="produtos" className="products">
        <h3>À venda</h3>
      </section>

      <main className="grid-container">
        <div className="grid-item">
          <img src="https://cdn.pixabay.com/photo/2013/07/13/09/37/loudspeaker-155807_960_720.png" alt="alto falante"/>
          <span className="preco">R$: 100</span>
          <span>Informações sobre este item</span>
        </div>
        <div className="grid-item">
          <img src="https://cdn.pixabay.com/photo/2013/07/13/11/33/loudspeaker-158394_960_720.png" alt="alto falante"/>
          <span className="preco">R$: 100</span>
          <span>Informações sobre este item</span>
        </div>
        <div className="grid-item">
          <img src="https://cdn.pixabay.com/photo/2013/07/13/09/37/loudspeaker-155807_960_720.png" alt="alto falante"/>
          <span className="preco">R$: 100</span>
          <span>Informações sobre este item</span>
        </div>
        <div className="grid-item">
          <img src="https://cdn.pixabay.com/photo/2013/07/13/11/33/loudspeaker-158394_960_720.png" alt="alto falante"/>
          <span className="preco">R$: 100</span>
          <span>Informações sobre este item</span>
        </div>
        <div className="grid-item">
          <img src="https://cdn.pixabay.com/photo/2013/07/13/09/37/loudspeaker-155807_960_720.png" alt="alto falante"/>
          <span className="preco">R$: 100</span>
          <span>Informações sobre este item</span>
        </div>
        <div className="grid-item">
          <img src="https://cdn.pixabay.com/photo/2013/07/13/11/33/loudspeaker-158394_960_720.png" alt="alto falante"/>
          <span className="preco">R$: 100</span>
          <span>Informações sobre este item</span>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Ullam cumque at illum, tempore recusandae vitae. 
          Tempore quae, eligendi illum ullam praesentium assumenda. 
          Veniam illum voluptatem earum asperiores, aspernatur aperiam similique.
          {'\n'}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Ullam cumque at illum, tempore recusandae vitae. 
          Tempore quae, eligendi illum ullam praesentium assumenda. 
          Veniam illum voluptatem earum asperiores, aspernatur aperiam similique.
        </p>
      </div>

      <footer>
        <p> &copy; Paulo Som</p>
        <p>Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;
