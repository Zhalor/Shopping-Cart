import {Header} from './Header';

function Contact(props) {
  return (
   <div className='container'>
    <Header cart={props.cart}/>
    <div className='about'>
      <p>Contact Section</p>
    </div>
   </div>
  )
}

export {Contact}
