

import  express  from "express";
import { createProduct, deleteProduct, getAllProduct, getSingleProduct, updateProduct } from "../controllers/productController.js";
import path,{resolve} from 'path'
const router=express.Router();
import multer from 'multer' 
const __dirname=resolve()

const storage = multer.diskStorage({
    filename : (req,file,cb)=>{
        const date=Date.now()
        cb(null,date+'_'+file.originalname)
    },
    destination :(req,file,cb)=>{
        cb(null,path.join(__dirname,'api/public/images/product'))
    }
})

const upload =multer({
    storage 
}).single('photo')


router.get('/',getAllProduct);
router.post('/',upload,createProduct);

router.route('/:id').get(getSingleProduct).delete(deleteProduct).put(updateProduct);


export default router
