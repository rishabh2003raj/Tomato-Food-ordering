import React, { useState } from 'react';
import Navbar from './components/NavBar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LoginPopUp from './components/LoginPopUp/LoginPopUp';
import MyOrder from './pages/MyOrders/MyOrder';


const App = () => {
  const [showLogin, setShowLogin] = useState(false); 

  return (
    <>
      {showLogin && <LoginPopUp setShowLogin={setShowLogin} />} 
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} /> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/placeorders' element={<PlaceOrder />} /> 
          <Route path= '/myorders' element ={<MyOrder/>} />
        </Routes>
      </div>
      <Footer /> 
    </>
  );
}

export default App;
