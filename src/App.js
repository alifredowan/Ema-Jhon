import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Header from './Component/Header/Header';
import Invertory from './Component/Invertory/Invertory';
import LogIn from './Component/Log-in/LogIn';
import Orders from './Component/Orders/Orders';
import RequireAuth from './Component/RequireAuth/RequireAuth';
import Shipment from './Component/Shipment/Shipment';
import Shop from './Component/Shop/Shop';
import SingUp from './Component/Sing-up/SingUp';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
              <Route path='/' element={<Shop></Shop>}></Route>
              <Route path='/shop' element={<Shop></Shop>}></Route>
              <Route path='/orders' element={<Orders></Orders>}></Route>
              <Route path='/Inventory' element={
                <RequireAuth>
                  <Invertory></Invertory>
                </RequireAuth>
              }></Route>
              <Route path='/shipment' element={<RequireAuth>
                <Shipment></Shipment>
              </RequireAuth>}></Route>
              <Route path='/about' element={<About></About>}></Route>
              <Route path='/login' element={<LogIn></LogIn>}></Route>
              <Route path='/singup' element={<SingUp></SingUp>}></Route>
              
      </Routes>
    </div>
  );
}

export default App;
