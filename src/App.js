import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Menu from './pages/Menu/Menu';
import MyOrders from './pages/My Orders/MyOrders';
import ReserveTable from './pages/Reserve a Table/ReserveTable';
import AdminDashboard from './pages/Admin Dashboard/AdminDashboard';
import SignIn from './pages/Sign In/SignIn';
import SignUp from './pages/Sign Up/SignUp';
import ResetPassword from './pages/Reset Password/ResetPassword';
import DeliveryOrder from './pages/Delivery Order/DeliveryOrder';
import PickupOrder from './pages/Pickup Order/PickupOrder';
import ShoppingCart from './pages/Shopping Cart/ShoppingCart';
import { CartProvider } from './pages/Shopping Cart/CartContext';

import Navbar from './components/Navbar/Navbar';
import WelcomeSection from './components/Welcome Section/WelcomeSection';
import OrderHere from './components/Order Here/OrderHere';
import SpecialOffers from './components/Special Offers/SpecialOffers';
import ExclusiveOffers from './components/Exclusive Offers/ExclusiveOffers';
import CommentsSection from './components/Comments Section/CommentsSection';
import Footer from './components/Footer/Footer';

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
    <CartProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/myOrders" element={<MyOrders />} />
        <Route path="/reserveTable" element={<ReserveTable />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />

        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/deliveryOrder" element={<DeliveryOrder />} />
        <Route path="/pickupOrder" element={<PickupOrder />} />
      </Routes>
    </CartProvider>
  );
}

const HomePage = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/hello')
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <WelcomeSection />
      <section className="landing-page">
        <OrderHere />
        <SpecialOffers offers={offers} />
      </section>
      <ExclusiveOffers />
      <CommentsSection />
      <br />
      <Footer />
    </div>
  );
};

export default App;