import {Header} from './components/Header';
import {Home} from './components/Home';

function App(props) {
  return (
   <div className='container'>
    <Header cart={props.cart} />
    <Home />
   </div>
  )
}

export {App}
