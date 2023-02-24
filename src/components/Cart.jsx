import {Header} from './Header';
import {CartItem} from './CartItem';
import { useState } from 'react';

function Cart(props) {
  const [total, setTotal] = useState(props.cart.reduce((total, current) => total + current.price, 0));
  const itemIDs = {};
  for(let obj of props.cart) {
    itemIDs[obj.id] = ++itemIDs[obj.id] || 1;
  }

  const uniqueItems = [];
  for(let item of props.cart) {
    if(!uniqueItems.includes(item)) {
      uniqueItems.push(item);
    }
  }

  return (
    <div className='container'>
    <Header cart={props.cart} />
    <div className='cart'>
      {uniqueItems.map(item => {
          return <CartItem item={item} itemIDs={itemIDs} cart={props.cart} 
          setCart={props.setCart} setTotal={setTotal} />;
        })}
      <p>Subtotal: {total}</p>
    </div>
   </div>
  );
}

export {Cart};