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
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/contact' element={<Contacts></Contacts>}></Route>
        <Route path='/pricing' element={<Pricing></Pricing>}></Route>
        <Route path='/services' element={<Pricing></Pricing>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
