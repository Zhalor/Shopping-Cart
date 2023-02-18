import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Shop from "./components/Shop";
import Cart from "./components/Cart";

function RouteSwitch() {

  const [storeItems, setStoreItems] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchFakeItems() {
    const data = await fetch('https://fakestoreapi.com/products');
    const items = await data.json();
    setStoreItems(items);
  }

  useEffect(() => {
    fetchFakeItems();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App setCount={setCount} count={count} />} />
        <Route path='/shop' element={<Shop storeItems={storeItems} count={count} />} />
        <Route path='/cart' element={<Cart count={count} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;