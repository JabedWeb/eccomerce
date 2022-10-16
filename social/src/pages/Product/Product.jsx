import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './Product.css'

const Product = () => {

    const {products} = useSelector(state=>state.products)
    console.log("sob product ki ache??");

    console.log(products);
  return (
    <>


    <div className="container product my-5">
        <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card card-shadow">
                        <div className="card-body">
                        <Link className='btn btn-primary' to="/admin/product/create">Create Product</Link>
                            <table className='table table-striped'>
                                <thead>
                                   <tr>
                                   <th>Name</th>
                                    <th>Product Price</th>
                                    <th>Sale Price</th>
                                    <th>Stock</th>
                                    <th>Photo</th>
                                    <th>Action</th>
                                   </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map((data)=>
                                        <tr>
                                        <td>{data.name}</td>
                                        <td>{data.regular_price}</td>
                                        <td>{data.sale_price}</td>
                                        <td>{data.stock}</td>
                                        <td><img src={`http://localhost:5050/images/product/${data.photo}`} alt="" /></td>
                                        <td>
                                            <a className='btn btn-success'  href="#"><i className='fa fa-eye'></i></a>
                                            <a className='btn btn-warning mx-3'  href="#"><i className='fa fa-edit'></i></a>
                                            <a className='btn btn-danger'  href="#"><i className='fa fa-trash'></i></a>
                                        </td>
                                    </tr>
                                    )
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    
    
    </>
  )
}

export default Product