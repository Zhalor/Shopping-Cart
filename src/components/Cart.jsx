import Header from './Header';

function Cart(props) {
  return (
    <div className='container'>
    <Header count={props.count} />
    <div className='cart'>
      Nothing here yet
    </div>
   </div>
  );
}

export default Cart;