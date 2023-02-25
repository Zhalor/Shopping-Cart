import {Header} from './components/Header';
import {Landing} from './components/Landing';

function App(props) {
  return (
   <div className='container'>
    <Header cart={props.cart} />
    <Landing />
   </div>
  )
}

export {App}
