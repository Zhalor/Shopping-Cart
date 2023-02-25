function Item(props) {
  return (
    <div className="item">
      <img src={props.item.image} alt="" />
      <p>{props.item.title}</p>
      <p>${props.item.price}</p>
      <button onClick={() => props.setCart(arr => [...arr, props.item])}>Add to cart</button>
    </div>
  );
}

export {Item};