import Header from './components/Header';
import Landing from './components/Landing';
import './styles.css';

function App(props) {
  return (
   <div className='container'>
    <Header count={props.count} />
    <Landing setCount={props.setCount} count={props.count} />
   </div>
  )
}

export default App
