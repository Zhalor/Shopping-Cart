import Header from './Header';
import CartItem from './CartItem';

function Cart(props) {

  const total = props.cart.reduce((total, current) => total + (current.item.price * current.count), 0);

  return (
    <div className='container'>
    <Header cart={props.cart} />
    <div className='cart'>
      {props.cart.map(item => {
          return props.cart.length > 0 ? <CartItem cartItem={item} /> : <p>hi</p>
        })}
      <p>Subtotal: {total}</p>
    </div>
   </div>
  );
}

export default Cart;