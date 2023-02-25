import {Header} from './Header';
import {CartItem} from './CartItem';
import { useEffect, useState } from 'react';

function Cart(props) {
  const [total, setTotal] = useState(props.cart.reduce((total, current) => total + current.price, 0));
  const [test, setTest] = useState([]);

  useEffect(() => {
    const uniqueItems = [];
    for(let item of props.cart) {
      const dupe = uniqueItems.find(obj => obj.id === item.id);
      if(!dupe) {
        uniqueItems.push(item);
      }
    }
    setTest(arr => uniqueItems);
  }, []);

  const itemIDs = {};
    for(let obj of props.cart) {
      itemIDs[obj.id] = ++itemIDs[obj.id] || 1;
    }

  return (
    <div className='container'>
    <Header cart={props.cart} />
    <div className='cart'>
      {test.map(item => {
          return <CartItem item={item} itemIDs={itemIDs} cart={props.cart} 
          setCart={props.setCart} setTotal={setTotal} />;
        })}
      <p>Subtotal: {total}</p>
    </div>
   </div>
  );
}

export {Cart};