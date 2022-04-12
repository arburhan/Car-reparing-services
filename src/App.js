import { Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home/Home';
import Route from './Components/Pages/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Routes>
        {/* <Route to='/home' element={<Route></Route>}></Route> */}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
