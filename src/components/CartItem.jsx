import { useState } from "react";

function CartItem(props) {
  const [quantity, setQuantity] = useState(props.itemIDs[props.item.id]);

  function addTocart(item) {
    const copyCart = props.cart;
    copyCart.push(item);
    props.setCart(arr => copyCart);
    console.log(props.cart);
    props.setTotal(props.cart.reduce((total, current) => total + current.price, 0));
  }

  function removeFromCart(item) {
    let index = 0;
    for(let cartItem of props.cart) {
      if(cartItem.id === item.id) {
        index = props.cart.indexOf(cartItem);
      }
    }
    const copyCart = props.cart;
    copyCart.splice(index, 1);
    props.setCart(arr => copyCart);
    console.log(props.cart);
    props.setTotal(props.cart.reduce((total, current) => total + current.price, 0));
  }

  if(quantity > 0) {
    return (
      <div className="cart-item">
        <img src={props.item.image} alt="" />
        <p>{props.item.title}</p>
        <div>
          <p>Price: ${props.item.price}</p>
          <div>
            <button onClick={() => {setQuantity(quantity - 1); removeFromCart(props.item)}}>-</button>
            <span>{quantity}</span>
            <button onClick={() => {setQuantity(quantity + 1); addTocart(props.item)}}>+</button>
          </div>
        </div>
      </div>
    );
  }
}

export {CartItem};