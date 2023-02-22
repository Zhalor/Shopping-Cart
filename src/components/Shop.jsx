import Header from './Header';
import Item from './Item';
import { useState } from 'react';

function Shop(props) {

  const [category, setCategory] = useState('electronics');

  return (
    <div className='container'>
    <Header cart={props.cart} />
    <div className='shop'>
      <div className='sidebar'>
        <ul>
          <li onClick={() => setCategory('electronics')}>
            Electronics
          </li>
          <li onClick={() => setCategory('jewelery')}>
            Jewelery
          </li>
          <li onClick={() => setCategory('men\'s clothing')}>
            Men's Clothing
          </li>
          <li onClick={() => setCategory('women\'s clothing')}>
            Women's Clothing
          </li>
        </ul>
      </div>
      <div className="item-container">
        {props.storeItems.map(item => {
          return item.category === category ? <Item item={item} cart={props.cart} setCart={props.setCart} /> : null
        })}
      </div>
    </div>
   </div>
  );
}

export default Shop;