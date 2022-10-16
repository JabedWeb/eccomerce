import axios  from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {Routes, Route } from 'react-router-dom';
import CreateProduct from './pages/Product/CreateProduct';
import Product from './pages/Product/Product';
import Shop from './pages/Shop/Shop';
import { getAllProducts } from './redux/product/action';


function App() {
  const dispatch=useDispatch()

  useEffect(()=>{

  axios.get(`http://localhost:5050/api/product`)
  .then(res=>{
    console.log(res.data);
    dispatch(getAllProducts(res.data))
  })
  .catch(err=>{
    console.log(err);
  })



  })

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
