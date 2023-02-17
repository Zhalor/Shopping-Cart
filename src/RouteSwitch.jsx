import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Electronics from './components/Electronics';
import Jewelery from './components/Jewelery';
import MensClothing from './components/Mens_Clothing';
import WomensClothing from './components/Womens_Clothing';


function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/electronics' element={<Electronics />} />
        <Route path='/jewelery' element={<Jewelery />} />
        <Route path='/mens_clothing' element={<MensClothing />} />
        <Route path='/womens_clothing' element={<WomensClothing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;