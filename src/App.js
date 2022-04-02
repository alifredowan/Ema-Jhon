import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Header from './Component/Header/Header';
import Invertory from './Component/Invertory/Invertory';
import Orders from './Component/Orders/Orders';
import Shop from './Component/Shop/Shop';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
              <Route path='/' element={<Shop></Shop>}></Route>
              <Route path='/shop' element={<Shop></Shop>}></Route>
              <Route path='/orders' element={<Orders></Orders>}></Route>
              <Route path='/Inventory' element={<Invertory></Invertory>}></Route>
              <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
