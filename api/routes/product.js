

import  express  from "express";
import { createProduct, deleteProduct, getAllProduct, getSingleProduct, updateProduct } from "../controllers/productController.js";


const router=express.Router();

router.get('/',getAllProduct);
router.post('/',createProduct);

router.route('/:id').get(getSingleProduct).delete(deleteProduct).put(updateProduct);


export default router
