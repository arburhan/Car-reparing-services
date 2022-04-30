import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Pages/About/About';
import AddService from './Components/Pages/AddService/AddService';
import Blog from './Components/Pages/Blog/Blog';
import Checkout from './Components/Pages/Checkout/Checkout';
import Addservice from './Components/Pages/Checkout/Checkout';
import Contacts from './Components/Pages/Contacts/Contacts';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import ManageServices from './Components/Pages/ManageServices/ManageServices';
import NotFound from './Components/Pages/NotFound/NotFound';
import Pricing from './Components/Pages/Pricing/Pricing';
import Register from './Components/Pages/Register/Register';
import RequerAuth from './Components/Pages/RequerAuth/RequerAuth';
import ServiceDetails from './Components/Pages/Services/ServiceDetails/ServiceDetails';
import Services from './Components/Pages/Services/Services';
import Shop from './Components/Pages/Shop/Shop';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/contact' element={<Contacts></Contacts>}></Route>
        <Route path='/pricing' element={<Pricing></Pricing>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/services/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={
          <RequerAuth>
            <Checkout></Checkout>
          </RequerAuth>
        }></Route>
        <Route path='/addservice' element={
          <RequerAuth>
            <AddService></AddService>
          </RequerAuth>
        }></Route>
        <Route path='/manageservices' element={
          <RequerAuth>
            <ManageServices></ManageServices>
          </RequerAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
