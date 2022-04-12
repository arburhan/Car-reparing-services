import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Pages/About/About';
import Blog from './Components/Pages/Blog/Blog';
import Contacts from './Components/Pages/Contacts/Contacts';
import Home from './Components/Pages/Home/Home';
import Pricing from './Components/Pages/Pricing/Pricing';
import Shop from './Components/Pages/Shop/Shop';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Routes>
        {/* 
        <Route to='/' element={<Home></Home>}></Route>
        <Route to='/home' element={<Home></Home>}></Route>
        <Route to='/about' element={<About></About>}></Route>
        <Route to='/blog' element={<Blog></Blog>}></Route>
        <Route to='/contact' element={<Contacts></Contacts>}></Route>
        <Route to='/pricing' element={<Pricing></Pricing>}></Route>
        <Route to='/services' element={<Pricing></Pricing>}></Route>
        <Route to='/shop' element={<Shop></Shop>}></Route> */}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
