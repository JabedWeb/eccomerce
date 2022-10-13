import React from 'react'
import { Link } from 'react-router-dom'

import './Product.css'

const Product = () => {
  return (
    <>

    <div className="container product my-5">
        <div className="row justify-content-center">
            <div className="col">
                <div className="col-md-6">
                    <div className="card card-shadow">
                        <div className="card-body">
                        <Link className='btn btn-primary' to="/admin/product/create">Create Product</Link>
                            <table className='table table-striped'>
                                <thead>
                                    <th>Name</th>
                                    <th>Product Price</th>
                                    <th>Sale Price</th>
                                    <th>Photo</th>
                                    <th>Action</th>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Samsung</td>
                                    <td>120</td>
                                    <td>12</td>
                                    <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDkCWf2GiEbH-3oZPjKSgRFVlgXO7nfxDxCEYSngHymuTNchEpNZBw30iG59cXPPMM8g&usqp=CAU" alt="" /></td>
                                    <td>
                                        <a className='btn btn-success'  href=""><i className='fa fa-eye'></i></a>
                                        <a className='btn btn-warning'  href=""><i className='fa fa-edit'></i></a>
                                        <a className='btn btn-danger'  href=""><i className='fa fa-trash'></i></a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    </>
  )
}

export default Product