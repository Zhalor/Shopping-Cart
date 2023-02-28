import imgURL from '../images/shopping-bag.jpg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className='home-title'>
        <p>From jewelery to electronics, we've got you covered.</p>
        <Link to='/shop'><button>Shop Now</button></Link>
      </div>
      <img src={imgURL} alt="" />
    </div>
  );
}

export {Home};