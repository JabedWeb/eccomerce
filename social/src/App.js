import React from 'react'
import {Routes, Route } from 'react-router-dom';
import CreateProduct from './pages/Product/CreateProduct';
import Product from './pages/Product/Product';
import Shop from './pages/Shop/Shop';


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/admin/product' element={<Product/>}/>
      <Route path='/admin/product/create' element={<CreateProduct/>}/>
    </Routes>
    </>
  );
}

export default App;
