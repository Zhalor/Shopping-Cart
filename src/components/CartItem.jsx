function CartItem(props) {
  return (
    <div className="cart-item">
      <img src={props.cartItem.item.image} alt="" />
      <p>{props.cartItem.item.title}</p>
      <p>{props.cartItem.item.price}</p>
      <p>{props.cartItem.count}</p>
    </div>
  );
}

export default CartItem;