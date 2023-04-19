import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App}  from './App';
import { Shop } from './components/Shop';
import { Cart } from './components/Cart';
import { Contact } from './components/Contact';
import './styles.css';

function RouteSwitch() {

  const [storeItems, setStoreItems] = useState([]);
  const [cart, setCart] = useState([]);

  async function fetchFakeItems() {
    const data = await fetch('https://fakestoreapi.com/products');
    const items = await data.json();
    setStoreItems(items);
  }

  useEffect(() => {
    fetchFakeItems();
  }, []);

  return (
    <BrowserRouter basename='/Shopping-Cart'>
      <Routes>
        <Route path='/' element={<App cart={cart} />} />
        <Route path='/shop' element={<Shop storeItems={storeItems} cart={cart} setCart={setCart} />} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
        <Route path='/contact' element={<Contact cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export {RouteSwitch};