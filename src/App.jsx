import {Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import "./App.css";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route  path='/aboutus' element={<AboutPage/>}/>
      <Route  path='/shop' element={<Shop/>}/>
      <Route  path='/cart' element={<Cart/>}/>
      <Route  path='/checkout' element={<Checkout/>}/>
    </Routes>
    </>
  );
}

export default App;
