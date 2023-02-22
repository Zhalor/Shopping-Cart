function Item(props) {

  function checkInCart(item) {
    
    for(let obj of props.cart) {
      if(obj.item === item) {
        ++obj.count;
        console.log(props.cart);
        return;
      }
    }

    props.setCart(arr => [...arr, {item: item, count: 1}]);
  }

  return (
    <div className="item">
      <p>{props.item.title}</p>
      <img src={props.item.image} alt="" />
      <p>{props.item.price}</p>
      <button onClick={() => checkInCart(props.item)}>Add to cart</button>
    </div>
  );
}

export default Item;