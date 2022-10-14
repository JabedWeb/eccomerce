
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

   try {
    const product= await Product.create({
        ...req.body,
        photo : req.file.filename
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