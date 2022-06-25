import  express  from "express";

import {deleteSinglecat,searchCategory,getCategory,getCategoryById,deleteCategory,deleteImage } from "../Controller/controler.mjs";

const categoryrouter = express.Router();

//routing

// serching userdata 
categoryrouter.get('/searchcategory',searchCategory);

//for display all data of category
categoryrouter.get('/allcategorydata',getCategory)//i get errors in display allproduct so i chnage the pathe of this  "/" to /allcategorydata in backend routing and api path both

// lode data in edit page  // i chnage the pathe of this  "/:id" to /allcategorydata:id becose i chnage tha path of alldatacategory
categoryrouter.get('/allcategorydata/:id*',getCategoryById)//hear we add * becose of search hase seme method get and also  url is same first / so 

//multiple delete
categoryrouter.delete('/deletecats/:id',deleteCategory)

// for delete single image from category
categoryrouter.post('/deletecategoryimage',deleteImage)

// for delete single data
categoryrouter.delete('/deletesincat/:id',deleteSinglecat)

export default categoryrouter
