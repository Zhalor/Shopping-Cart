import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/content';
import './styles.css';

function App() {

  const [storeItems, setStoreItems] = useState([]);

  async function fetchFakeItems() {
    const data = await fetch('https://fakestoreapi.com/products/categories');
    const items = await data.json();
    setStoreItems(items);
  }

  useEffect(() => {
    fetchFakeItems();
  }, []);

  return (
   <div className='container'>
    <Header />
    <div>
      <Sidebar />
      <Content />
    </div>
   </div>
  )
}

export default App
