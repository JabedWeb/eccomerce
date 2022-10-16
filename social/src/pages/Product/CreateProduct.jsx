import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'

const CreateProduct = () => {

    //field name state
    const [input,setInput]=useState({
        name : '',
        regular_price : '',
        sale_price : '',
        stock : '',
        file : '',
        gall : [],
        category : [],
        tags : []
    });

    //update form field
    const handleInputChange =(e)=>{
        setInput((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value,
            [e.target.regular_price]:e.target.value,
            [e.target.sale_price] : e.target.value,
            [e.target.stock] : e.target.value
        }));
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

    //handle Photo

    const handleProductPhoto =(e)=> {
        setInput((prevState)=>({
            ...prevState,
            file : e.target.files[0]

        }))
    }

    //handle gallery 
    const handleProductGallery =(e)=>{
        setInput ((prevState)=>({
            ...prevState,
                gall :e.target.files
        }))
    }

    //form submit
    const productHandleForm = async(e)=> {
        e.preventDefault();

        const data =new FormData();
        data.append('name',input.name)
        data.append('regular_price',input.regular_price)
        data.append('sale_price',input.sale_price)
        data.append('stock',input.stock)
        data.append('category',input.category)
        data.append('tags',input.tags)
        data.append('photo',input.file)
        for(let i=0;i<input.gall.length;i++){
            data.append('gallery',input.gall[i])
        }

        //gallery (database)
        //gall (react/redux)
        


       try {
        await axios.post(`http://localhost:5050/api/product`,data)
        .then(res=>{
            swal({
                title: "Good job!",
                text: "Product added successful",
                icon: "success",
                button: "Aww yiss!",
              });

              e.target.reset()
              setInput((prevState)=>({
                name : '',
                regular_price : '',
                sale_price : '',
                stock :'',
                gall : [],
                file : '',
                category : [],
                tags : []
              }))
        })
        .catch(err=>{
            swal({
                title: "Failed job!",
                text: "Product Added Failed",
                icon: "Danger",
                button: "Aww yiss!",
              });
        });
        
       } catch (error) {
        console.log(error);
       }

    }

  return (
    <>
    <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-body">
                        <Link className='btn btn-primary mx-2' to="/admin/product">All Product</Link>
                        <Link className='btn btn-success' to="/">Shop</Link>
                        <h2 className='text-center my-2'>Add New Product</h2>
                            <form onSubmit={productHandleForm} method="POST" encType='multipart/form-data'>
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
                                    <label htmlFor="">Stock</label>
                                    <input name='stock' onChange={handleInputChange} value={input.stock} className='form-control' type="text" />
                                </div>
                        
                                <div className="my-3">
                                    <label htmlFor="">Photo</label>
                                    <input name='photo' onChange={handleProductPhoto} className='form-control' type="file" />
                                </div>
                                <div className="my-3">
                                    <label htmlFor="">Gallery</label>
                                    <input name='gallery' onChange={handleProductGallery} className='form-control' type="file"  multiple/>
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