import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CreateProduct = () => {

    //field name state
    const [input,setInput]=useState({
        name : '',
        regular_price : '',
        sale_price : '',
        stock :'',
        photo : [],
        file : '',
        category : [],
        tags : []
    });

    //update form field
    const handleInputChange =(e)=>{
        setInput((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value,
            [e.target.regular_price]:e.target.value,
            [e.target.sale_price] : e.tar.value
        }))
    }

    //for category state
    const handleCheckboxChange =(e)=>{
        if(e.target.checked){
            let cats=input.category
            cats.push(e.target.value);
            setInput((prevState)=>({
                ...prevState,
                category : cats
            }))
        }
        else{
        let cats = input.category;
        const newCats=cats.filter(data=>data !==e.target.value);
        setInput((prevState)=>({
            ...prevState,
            category : newCats
        }))
        }
    }

    const handleTagsChange =(e)=>{
        if(e.target.checked){
            let tag=input.tags
            tag.push(e.target.value)
            setInput((prevState)=>({
                ...prevState,
                tags : tag
            }))
        }
        else{
            let tag =input.tags;
            const newTags=tag.filter(data=>data!==e.target.value);
            setInput((prevState)=>({
                ...prevState,
                tags : newTags
            }))
        }
    }

  return (
    <>
    <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-body">
                        <Link className='btn btn-primary' to="/admin/product">All Product</Link>
                        <h2 className='text-center my-2'>Add New Product</h2>
                            <form action="">
                                <div className="my-3">
                                    <label htmlFor="">Name</label>
                                    <br />
                                    <input name='name' onChange={handleInputChange} value={input.name} className='form-control' type="text" />
                                </div>
                                <div className="my-3">
                                    <label htmlFor="">Regular Price</label>
                                    <input name='regular_price' onChange={handleInputChange} value={input.regular_price} className='form-control' type="text" />
                                </div>
            
                                <div className="my-3">
                                    <label htmlFor="">Sale Price</label>
                                    <input name='sale_price' onChange={handleInputChange} value={input.sale_price} className='form-control' type="text" />
                                </div>
                        
                                <div className="my-3">
                                    <label htmlFor="">Photo</label>
                                    <input className='form-control' type="file" />
                                </div>
                                <div className="my-3">
                                    <label htmlFor="">Category</label>
                                    <hr />
                                    <label htmlFor="">
                                        <input onChange={handleCheckboxChange} type="checkbox" value='Men' /> Men                                    </label>
                                    <br />
                                    <label htmlFor="">
                                        <input onChange={handleCheckboxChange}  type="checkbox" value='Women' /> Women
                                    </label>
                                    <br />
                                    <label htmlFor="">
                                        <input onChange={handleCheckboxChange}  type="checkbox" value='Electronic' /> Electronic                                    </label>
                                    <br />
                                    
                                </div>
                                <div className="my-3">
                                    <label htmlFor="">Tags</label>
                                    <hr />
                                    <label htmlFor="">
                                        <input onChange={handleTagsChange} type="checkbox" value='Eid' /> Eid
                                    </label>
                                    <br />
                                    <label htmlFor="">
                                        <input onChange={handleTagsChange} type="checkbox" value='Kids' /> Kids                                    </label>
                                    <br />
                                    <label htmlFor="">
                                        <input onChange={handleTagsChange} type="checkbox" value='Puja' /> Pujs                                   </label>
                                    <br />
                                    
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