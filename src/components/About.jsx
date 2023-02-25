import {Header} from './Header';

function About(props) {
  return (
   <div className='container'>
    <Header cart={props.cart}/>
    <div className='about'>
      <p>About Section</p>
    </div>
   </div>
  )
}

export {About}
