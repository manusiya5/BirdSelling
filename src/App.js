
import Login from './pages/Login';
import Home from './pages/Home';
import AllDetails from './pages/AllBirdDetails';
import FirstBird from './pages/FirstBirdDetails';
import SecondBird from './pages/SecondBirdDetails';
import ThirdBird from './pages/ThirdBirdDetails';
import FourthBird from './pages/FourthBirdDetails';
import FifthBird from './pages/FifthBirdDetails';
import SignUp from './pages/SignUp';
import Order from './pages/Order';
import Customer from './pages/Customer';
import Success from './pages/Success';
import AdminNav from './pages/AdminNav';
import Report from './pages/Report';
import DisplayReport from './pages/DisplayReport';
import Contact from './pages/Contact';
import AllBirdNav from './pages/AllBirdNav';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Bird1Cart from './pages/Bird1cart';
import Bird2Cart from './pages/Bird2cart';
import Bird3Cart from './pages/Bird3cart';
import Bird4Cart from './pages/Bird4cart';
import Bird5Cart from './pages/Bird5cart';

function App() {
  return (
   <div>
     <BrowserRouter>
     
      <Link to='/'></Link>
      <Routes>
      <Route path='/' element={< Home/>} />
        <Route path='/Login' element={< Login/>} />
        <Route path='/SignUp' element={< SignUp/>} />
        <Route path='/AllBirdDetails' element={< AllDetails/>} />
        <Route path='/FirstBirdDetails' element={< FirstBird/>} />
        <Route path='/SecondBirdDetails' element={< SecondBird/>} />
        <Route path='/ThirdBirdDetails' element={< ThirdBird/>} />
        <Route path='/FourthBirdDetails' element={< FourthBird/>} />
        <Route path='/FifthBirdDetails' element={< FifthBird/>} />
        <Route path='/Order' element={< Order/>} />
        <Route path='/Customer' element={< Customer/>} />
        <Route path='/Success' element={< Success/>} />
        <Route path='/AdminNav' element={< AdminNav/>} />
        <Route path='/Report' element={< Report/>} />
        <Route path='/DisplayReport' element={< DisplayReport/>} />
        <Route path='/Contact' element={< Contact/>} />
        <Route path='/AllBirdNav' element={< AllBirdNav/>} />
        <Route path='/Bird1cart' element={< Bird1Cart/>} />
        <Route path='/Bird2cart' element={< Bird2Cart/>} />
        <Route path='/Bird3cart' element={< Bird3Cart/>} />
        <Route path='/Bird4cart' element={< Bird4Cart/>} />
        <Route path='/Bird5cart' element={< Bird5Cart/>} />

      </Routes>
      </BrowserRouter>
   </div>
  );
}
export default App;
