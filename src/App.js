import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import NoMatchPage from './components/NoMatchPage';
import NewArrivals from './pages/NewArrivals';
import data from './data/data';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from 'react';

function App() {

  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes> 
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About/>} />
      <Route path='products' element={<Products  onAdd={onAdd} products = {products}/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='newarrivals' element={<NewArrivals/>} />
       <Route path='cart' element={<Cart onAdd={onAdd}  onRemove={onRemove} cartItems={cartItems}/>} /> 
       <Route path='*' element={<NoMatchPage/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
