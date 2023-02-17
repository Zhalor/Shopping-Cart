import {Link} from 'react-router-dom';

function Sidebar() {
  return (
    <div className='sidebar-container'>
      <button onClick={() => console.log(storeItems)}>Click Me!</button>
    <ul>
      <li>
        <Link to={'/electronics/'}>Electronics</Link>
      </li>
      <li>
        <Link to={'/jewelery/'}>Jewelery</Link>
      </li>
      <li>
        <Link to={'/mens_clothing/'}>Men's Clothing</Link>
      </li>
      <li>
        <Link to={'/womens_clothing/'}>Women's Clothing</Link>
      </li>
    </ul>
    </div>
  );
}

export default Sidebar;