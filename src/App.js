import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Fragment} from 'react';
import {Routes, Route} from 'react-router-dom'; 
import NavBar from './Components/NavBar';
import ProductList from './Components/ProductList';
import Details from './Components/Details';
import Cart from './Components/Cart';
import Default from './Components/Default';

const App = () => {
  return (
    <React.Fragment>
    <NavBar />
      <Routes>
        <Route exact path="/" element={<ProductList/>} />
        <Route path= "/details" element ={<Details/>}/>
        <Route path= "/cart" element ={<Cart/>}/>
        <Route path= "*" element ={<Default/>}/>
      </Routes>
</React.Fragment> 
  );
}

export default App;
