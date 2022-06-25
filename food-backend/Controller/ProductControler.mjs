import fs from 'fs';
import User from '../Model/schima.mjs';
import Pros from '../Model/productSchima.mjs';

//for display all data 

export const getProducts = async (req,res)=>{

  // const name = req.params.name;
//  console.log(name);   

  try {
    // console.log("hello");
      //for sorting 
      var mysort = { _id: -1 };
      //for save the data in momgodb from req.body
    let pros =  await Pros.find().sort(mysort);
// console.log(pros);    
     res.json(pros);
  }catch(error){
      res.json({message: error.message});
  }
}

//add products logic

export const addProduct = async (req,res)=>{

    //for  requset img
    let image = (req.file) ? req.file.filename:null;
  
    //   console.log(image);
      //  hear we fatch all new image from imagearr and push or add  it in image Array

      //use to get alldata of user 
          const pros = req.body;

          //use this becose schima is not taking image 
          
  //hear we gat images data in image array so we add it in user 
  pros.image = image;

  // const newPros = await cart.create(pros)
          const newPros = new Pros(pros);

        //   console.log(newPros);

          try {

              // newuser.save is use for save the data in databaise and data comse from from req.body
             await newPros.save();
             res.json(newPros);
          }catch(error){
              res.json({message: error.message});
          }
  }

//delete multiple products

export const deleteProducts = async (req,res)=>{
  // console.log("its delete bro");
  //DELETE all selected  images from the  folder we delete from the front end and databaise  
   const prod =  await Pros.find({'_id':{'$in':req.params.id.split(",")}});//STORE all selected data in users variable         
   
       prod.map((e) => {

  // console.log(e.image);                  
  //             //for delete images from folder//for map only images we use e.image
               fs.unlinkSync("public/product/"+e.image);//path of images
  //         });
  });
  try {

      //logic of delete multiple ids from databaise and from webpage // split(",") is use for covert string data in to aaray so we can delete full array at once

        await Pros.deleteMany({'_id':{'$in':req.params.id.split(",")}});

      res.json("delete user")
  }catch(error){
      console.log("error:"+ error.message);
      res.json({message:error.message});
  }
}

// serch data from backend and database

export const searchProducts = async (req,res)=>{

  // console.log(req.query.searchQuery);
  const searchQuery = req.query.searchQuery;

  try{

const  proname = new RegExp(searchQuery,'i');//this is for we serch meet or Meet or MEET all are same 
const pros = await Pros.find({proname})//it faind the data acording to name of user name is  proname hear
// console.log(pros);
// console.log( proname);

// console.log({data:pros});
res.json({data:pros});//we store the responce in data so in frontend use data.data for responce 
}catch(error){
res.status(404).json({message:error.message})
  }
}
//serching data logic is over 

 //for lode data at edit page of product

 export const getProductById = async(req,res)=>{

  const id = req.params.id;
  
  try {
//user store the all data of that id 
const pros = await Pros.findById(id);

res.json(pros);
  }catch (error){
      res.json({message:console.error.message});
  }    
}

// edit the values and image both of product

export const  editProduct = async (req,res)=>{
 
//for edit only value not for image 

var pros = req.body;//user hold the data we want to edit new 
// console.log(pros);
//condition for edit image 
if(req.file){
// store the image in image variable 
  let image = (req.file) ? req.file.filename:null;
// console.log(image);

//store the image with other data 
  pros.image = image;

}   

const editproduct = new Pros(pros); 
// console.log(editproduct);
 try {

     //updateOne is use for update only one id (and updateMany use for update mant id) 
   await Pros.updateOne({_id: req.params.id}, editproduct);//editcategory hold the new edit data for update 
  res.json(editproduct)   

// console.log(editproduct);

 }catch(error){
     res.json({message:console.error.message});
 }
}

// for delete single image from the edit page of category 
export const deleteProductImage = async (req,res)=>{
console.log("hello")
  const img =  req.body.image
      //for delete file or image from tha folder wher we are uploded user images 
      fs.unlinkSync("public/product/"+img);
  
      try{        
     
  const pros = await Pros.findByIdAndUpdate(
      req.body.id,
  
      // fs.unlinkSync(user.image),
  
      {
  $pull:{
  
          image:req.body.image
  },
      },
      {new:true}    
  )
  // fs.unlinkSync('http://127.0.0.1:9000/public/images/req.body.image');
  // fs.unlinkSync('/public');
  
  //the try part is not working or no need till try end 
  
  if(!pros){
  
      // return res.status(400).send("User not found");
  }
          //  await User.findByIdAndDelete((req.body.image))
  
          // doc.image= req.body.image;
      res.json("delete image")
      // console.log("user",user);
  }catch(error){
      res.json({message:error.message});
  }
   }
  

// for delete single data of product
export const deleteSingle = async (req,res)=>{

    let pros =  await Pros.find({_id: req.params.id});//save all selected data in users variable         

    pros.map((e) => {//e save all data of user 
            //for delete images from folder
            fs.unlinkSync("public/product/"+e.image);//path of images and e save all data so we neww only image so we write e.image
        });
    
    try {
        //updateOne is use for update only one id (and updateMany use for update mant id) 
        await Pros.deleteOne({_id: req.params.id});
        res.json("delete user")
    }catch(error){
        res.json({message:error.message});
    }

  }

// serch data from image click envet and list products 

export const searchproductofcategory = async (req,res)=>{

    //hear we use some query 
    let page = parseInt(req.query.page) || 1;
    let pageSize = parseInt(req.query.limit) || 6;

//hear we get category name name of clike image and pagination
 
const searchQuery = req.query.searchQuery;

 //pros store the categorydetails faind by findOne method
 let cat =  await User.findOne({name: searchQuery});

 //we need only id of category so we write pros.id

  //make a variable name as u want to search that schima name  is compolsory
  const category = cat.id;
  
//for skip page right to left 

  let skip = (page - 1) * pageSize;
  let total = await Pros.countDocuments({category})
// console.log(total);
// console.log(skip);
   try{

    let pages = Math.ceil(total / pageSize);
  // console.log(pages);
//  use same name of u want to search the schima name and write in find(category)
const allpros = await Pros.find({category}).skip(skip).limit(pageSize);//it faind the data acording to category number of product 
// hrar category is stiore number not id so we use faind method not faindbtId 

// console.log(allpros);
if(page > pages){

  return  res.status(404).json({
        status:"fail",
        message:"no page found"
    })
}

res.json({data:allpros});//we store the responce in data so in frontend use data.data for responce 
}catch(error){
res.status(404).json({message:error.message})
}
}

//for get singleproduct using id on one-product page
export const getSingleProductById = async(req,res)=>{
  console.log("hello");
  const id = req.params.id;
  console.log(id);
  try {
//findByid is use for faind the user by id usin params
const pro = await Pros.findById(id);
res.json(pro);
  }catch (error){
      res.json({message:console.error.message});
  }    
}
