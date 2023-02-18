import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';

function Shop(props) {
  return (
    <div className='container'>
    <Header count={props.count} />
    <div className='shop'>
      <Sidebar />
      <Content storeItems={props.storeItems} />
    </div>
   </div>
  );
}

export default Shop;