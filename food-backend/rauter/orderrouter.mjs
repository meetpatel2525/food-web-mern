import  express  from "express";
import {deleteAdrs,editadress,lodeadrs,updatestatus,getAllAdress,usersaddress,cartprodelete,cartUpdate,getCart,carts,getMyOrders,getview,getOrders,userorder } from "../Controller/Myorder.mjs";
// import {deleteSinglecat,searchCategory,getCategory,getCategoryById,deleteCategory,deleteImage } from "../Controller/controler.mjs";

const ordersrouter = express.Router();

//for add order in databaise 
ordersrouter.post('/myorder',userorder)

//for add order in databaise 
ordersrouter.get('/allorders',getOrders)

ordersrouter.get('/view/:id',getview)

ordersrouter.get('/myorder/:id',getMyOrders)

ordersrouter.post('/cart',carts)

ordersrouter.get('/allcart/:id',getCart)

ordersrouter.post('/updateqty/:id',cartUpdate)

ordersrouter.post('/deletecartpro',cartprodelete)

ordersrouter.post('/useraddress',usersaddress)

ordersrouter.get('/alladress/:id',getAllAdress)

ordersrouter.post('/updatesatatus/:id',updatestatus)

// lode address data for edit
ordersrouter.get('/geteditadrs/:id',lodeadrs)

//edit adress
ordersrouter.put('/editadrs/:id',editadress);

// delete address of user
ordersrouter.delete('/deleteadrs/:id',deleteAdrs)

export default ordersrouter
