import React from 'react'
import './Shop.css'

const Shop = () => {
  return (
    <>
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-3">
                    <div className="card shadow">
                        <div className="card-body">
                             <div className="widget1 my-3">
                                <h3>Search</h3>
                                <input className='form-control' type="text" />
                             </div>
                             <div className="widget2 my-3">
                                <h5>Category</h5>
                                <ul className='list-group'>
                                    <li className='list-group-item'><a href="">Men</a></li>
                                    <li className='list-group-item'><a href="">Women</a></li>
                                    <li className='list-group-item'><a href="">Electronic</a></li>
                                    <li className='list-group-item'><a href="">Kids</a></li>
                                </ul>
                             </div>
                             <div className="widget2 my-3">
                                <h5 >Tags</h5>
                                <div className="tags">
                                <a href="">Eid</a>
                                <a href="">Kids</a>
                                <a href="">Puja</a>
                                </div>
                             </div>
                             <div className="widget2 my-3">
                                <h5>Price</h5>
                                <input type="range" />
                                <input type="range" />
                             </div>
                        </div>
                    </div>
            </div>
            <div className="col-md-9">
              <div className="row">
                <h2>Best Product</h2>
                <div className="col-md-4">
                <div className="card">
                        <img className='card-img' src="https://www.lavamobiles.com/images/card-smartphones.jpg" alt="" />
                    <div className="card-body">
                        <h3>Samsung</h3>
                    </div>
                    <div className="card-footer">
                        <p>Price : 120</p>
                    </div>
                </div>
                </div>
                <div className="col-md-4">
                <div className="card">
                        <img className='card-img' src="https://www.lavamobiles.com/images/card-smartphones.jpg" alt="" />
                    <div className="card-body">
                        <h3>Samsung</h3>
                    </div>
                    <div className="card-footer">
                        <p>Price : 120</p>
                    </div>
                </div>
                </div>
                <div className="col-md-4">
                <div className="card">
                        <img className='card-img' src="https://www.lavamobiles.com/images/card-smartphones.jpg" alt="" />
                    <div className="card-body">
                        <h3>Samsung</h3>
                    </div>
                    <div className="card-footer">
                        <p>Price : 120</p>
                    </div>
                </div>
                </div>
                <div className="col-md-4">
                <div className="card">
                        <img className='card-img' src="https://www.lavamobiles.com/images/card-smartphones.jpg" alt="" />
                    <div className="card-body">
                        <h3>Samsung</h3>
                    </div>
                    <div className="card-footer">
                        <p>Price : 120</p>
                    </div>
                </div>
                </div>
                <div className="col-md-4">
                <div className="card">
                        <img className='card-img' src="https://www.lavamobiles.com/images/card-smartphones.jpg" alt="" />
                    <div className="card-body">
                        <h3>Samsung</h3>
                    </div>
                    <div className="card-footer">
                        <p>Price : 120</p>
                    </div>
                </div>
                </div>
                <div className="col-md-4">
                <div className="card">
                        <img className='card-img' src="https://www.lavamobiles.com/images/card-smartphones.jpg" alt="" />
                    <div className="card-body">
                        <h3>Samsung</h3>
                    </div>
                    <div className="card-footer">
                        <p>Price : 120</p>
                    </div>
                </div>
                </div>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Shop