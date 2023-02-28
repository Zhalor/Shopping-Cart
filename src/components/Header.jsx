import { Link } from 'react-router-dom';


function Header(props) {
  
  return (
    <div className='header'>
      <div>
        <h1 className='header-title'><Link to='/'>FakeStore</Link></h1>
        <div>
          <p className='header-btn'><Link to='/'>Home</Link></p>
          <p className='header-btn'><Link to='/shop'>Shop</Link></p>
          <p className='header-btn'><Link to='/contact'>Contact</Link></p>
          <div className='cart-btn'>
            <Link to='/cart'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='cart-icon'>
                <path d="M17 18c-1.11 0-2 .89-2 2a2 2 0 002 2 2 2 0 002-2 2 2 0 00-2-2M1 2v2h2l3.6 7.59-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 002 2h12v-2H7.42a.25.25 0 01-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 00-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 002 2 2 2 0 002-2 2 2 0 00-2-2z"></path>
              </svg>
            </Link>
            {props.cart.length > 0 ?
            <p className='cart-quantity'>{props.cart.length}</p> :
            null}
          </div>
        </div>
      </div>
    </div>
  );
}

export {Header};