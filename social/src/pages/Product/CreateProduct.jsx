import React from 'react'
import { Link } from 'react-router-dom'

const CreateProduct = () => {
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-body">
                        <Link className='btn btn-primary' to="/admin/product">All Product</Link>
                            <form action="">
                                <div className="my-3">
                                    <label htmlFor="">Name</label>
                                    <br />
                                    <input className='form-control' type="text" />
                                </div>
                                <div className="my-3">
                                    <label htmlFor="">Regular Price</label>
                                    <input className='form-control' type="text" />
                                </div>
            
                                <div className="my-3">
                                    <label htmlFor="">Sale Price</label>
                                    <input className='form-control' type="text" />
                                </div>
                        
                                <div className="my-3">
                                    <label htmlFor="">Photo</label>
                                    <input className='form-control' type="file" />
                                </div>
                             
                                <div className="my-3">
                                    <input className='form-control btn btn-primary' type="submit" value="Create" />
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default CreateProduct