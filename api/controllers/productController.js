
import Product from "../models/Product.js"
import createError from "./errorController.js";


export const getAllProduct= async (req,res,next)=>{

    try {
        const products =await Product.find()
        res.status(200).json(products);
    } catch (error) {
        next(createError(error))
    }

}

export const getSingleProduct= async(req,res,next)=>{
    const {id} =req.params;
    console.log(id);
    try {

       const product=await Product.findOne({_id:id}) 
       if(product){
        res.status(200).json(product);
       }
       else{
        next(createError(401,'product is not found'))
       }
    } catch (error) {
        next(createError(error))
    }
}

export const createProduct=async(req,res,next)=>{
    let gallery =[];
 
    for(let i=0;i<req.files.gallery.length;i++){
        gallery.push( req.files.gallery[i].filename)
    }
   try {
    const product= await Product.create({
        ...req.body,
        photo : req.files.photo[0].filename,
        gallery : gallery,
        category : req.body.category.split(','),
        tags : req.body.tags.split(',')
    });
    if(product){
        res.status(200).json({
            message : 'product added Successful'
        })
    }
    else{
        next(createError(401,'Product create fails'))
    }
   } catch (error) {
    next(createError(error))
   }
}

export const deleteProduct= async(req,res,next)=>{
    const {id}=req.params
    try {
        const product= await Product.findByIdAndDelete(id)
        if (product){
            res.status(400).json(product)
        }
    } catch (error) {
        next(createError(error))
    }
}


export const updateProduct= async(req,res,next)=>{
    const {id}=req.params
    try {
        const product=await Product.findByIdAndUpdate(id,req.body)
        if(product){
            res.status(200).json(product)
        }
    } catch (error) {
        
    }
}