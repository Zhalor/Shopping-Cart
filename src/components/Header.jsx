import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div className="header">
      <h1 className="header-title"><Link to='/'>FakeEgg</Link></h1>
      <div>
        <p><Link to='/shop'>Shop</Link></p>
        <div className='cart-btn'>
          <p>{props.count ? props.count : null}</p>
          <p><Link to='/cart'>Cart</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Header;