function Content(props) {
  return (
    <div className="item-container">
      <div className="item">
        <img src={props.storeItems[0].image} alt="" />
      </div>
      <div className="item">
        <img src={props.storeItems[1].image} alt="" />
      </div>
      <div className="item">
        <img src={props.storeItems[2].image} alt="" />
      </div>
      <div className="item">
        <img src={props.storeItems[3].image} alt="" />
      </div>
      <div className="item">
        <img src={props.storeItems[4].image} alt="" />
      </div>
    </div>
  );
}

export default Content;