import  express  from "express";

import {getSingleProductById,searchproductofcategory ,deleteSingle,getProductById,getProducts,deleteProducts,searchProducts, deleteProductImage} from "../Controller/ProductControler.mjs";
// import { userorder } from "../Controller/Myorder.mjs";
const productrouter = express.Router();

// for display all data of products
productrouter.get('/allproductdata',getProducts)

//multiple delete
productrouter.delete('/deletepro/:id',deleteProducts)

// serching userdata 
productrouter.get('/search',searchProducts);

// lode data in edit page  // i chnage the pathe of this  "/:id" to /allcategorydata:id becose i chnage tha path of alldatacategory
productrouter.get('/allproductdata/:id',getProductById)//hear we add * becose of search hase seme method get and also  url is same first / so 

// for delete single image from product
productrouter.post('/deleteimage', deleteProductImage )

// for delete single data from product
productrouter.delete('/:id',deleteSingle)

// serching products my image click 
productrouter.get('/catproductlists',searchproductofcategory);

//for get singleproduct using id on one-product page
productrouter.get('/allproductdata/:id',getSingleProductById);


export default productrouter;


