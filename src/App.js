import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import WelcomeSection from './components/Welcome Section/WelcomeSection';
import OrderHere from './components/Order Here/OrderHere';
import SpecialOffers from './components/Special Offers/SpecialOffers';
import oferta1 from './assets/img/oferta-1.png'; 
import oferta2 from './assets/img/oferta-2.png'; 
import oferta3 from './assets/img/oferta-3.png'; 
import oferta4 from './assets/img/oferta-4.png'; 

const offers = [
  { oferta: "Calor y Sabor", imagen: oferta1, descripcion: "Lleva un Caramel Macchiato y obtén un Espresso Doble gratis. Ideal para los amantes del café intenso.", alt: "Caramel Macchiato" },
  { oferta: "Delicias al Horno", imagen: oferta2, descripcion: "Compra una Dona de Chocolate y obtén una Galleta Chips de Chocolate gratis. Doble delicia.", alt: "Delicias al Horno" },
  { oferta: "Comienza bien tu día", imagen: oferta3, descripcion: "Disfruta de un Wrap de Pollo y obtén un Bowl de Yogurt con 20% de descuento. Un snack saludable y sabroso.", alt: "Comienza bien tu día" },
  { oferta: "Refresca tu día", imagen: oferta4, descripcion: "Compra un Iced Cappuccino y obtén un Iced Caramel Latte con 50% de descuento. Refresca tu paladar.", alt: "Refresca tu día" }
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <WelcomeSection />
      <section className="landing-page">
        <OrderHere />
        <SpecialOffers offers={offers} />
      </section>
    </div>
  );
}

export default App;