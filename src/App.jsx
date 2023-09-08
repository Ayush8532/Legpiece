import {Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import Shop from "./pages/Shop";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/Checkout";
import Productdesc from "./components/Productdesc";
import Blogdesc from "./pages/Blogdesc";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import "./App.css";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route  path='/aboutus' element={<AboutPage/>}/>
      <Route  path='/shop' element={<Shop/>}/>
      <Route  path='/item/:id' element={<Productdesc/>}/>
      <Route  path='/blog/:id' element={<Blogdesc/>}/>
      <Route  path='/cart' element={<Cart/>}/>
      <Route  path='/checkout' element={<Checkout/>}/>
      <Route  path='/account' element={<Account/>}/>
      <Route  path='/login' element={<Login/>}/>
      <Route  path='/register' element={<Signup/>}/>
    </Routes>
    </>
  );
}

export default App;
