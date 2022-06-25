// import user from "../Model/schima.mjs";
import User from "../Model/schima.mjs";
import fs from 'fs';

import { query } from "express";

//for display all data 
export const getCategory = async (req,res,next)=>{
    
    try {
        //for sorting 
        var mysort = { _id: -1 };
        //for save the data in momgodb from req.body
      let user =  await User.find().sort(mysort);
      
       res.json(user);
       
    }catch(error){
        res.json({message: error.message});

    }
}

// serch data from backend and database

export const searchCategory = async (req,res)=>{

    console.log(req.query.searchQuery);
    const searchQuery = req.query.searchQuery;

    try{
 const name = new RegExp(searchQuery,'i');//this is for we serch meet or Meet or MEET all are same 
const user = await User.find({name})//it faind the data acording to name of user 
  
res.json({data:user});//we store the responce in data so in frontend use data.data for responce 
}catch(error){
res.status(404).json({message:error.message})
    }
}

//serching data logic is over  

// for add data 
export const addCategory = async (req,res)=>{
// console("hello")
    //for  requset img
       let image = (req.file) ? req.file.filename:null;

      //use to get data 
          const user = req.body;

        //   console.log(user);
          //use this becose schima is not taking image 
  user.image = image;
  
//    console.log(user);
  
          const newUser = new User(user);
  
          try {
              // newuser.save is use for save the data in databaise and data comse from from req.body
             await newUser.save();
             res.json(newUser);
          }catch(error){
              res.json({message: error.message});
          }
  }
  
  //for lode data at edit page

  export const getCategoryById = async(req,res)=>{
    const id = req.params.id;
    console.log(id);
    try {
//user store the all data of that id 
 const user = await User.findById(id);
 res.json(user);
    }catch (error){
        res.json({message:console.error.message});
    }    
}
// edit the values and image both 
export const   editCategory = async (req,res)=>{
   console.log("edit cat");
   console.log(req.body);
//for edit only value not for image 

var user = req.body;//user hold the data we want to edit new 

//condition for edit image 
if(req.file){
// store the image in image variable 
    let image = (req.file) ? req.file.filename:null;

//store the image with other data 
    user.image = image;

}   
const editcategory = new User(user); 

   try {

       //updateOne is use for update only one id (and updateMany use for update mant id) 
     await User.updateOne({_id: req.params.id}, editcategory);//editcategory hold the new edit data for update 
    res.json( editcategory)   


   }catch(error){
       res.json({message:console.error.message});
   }
}

//delete multiple

export const deleteCategory = async (req,res)=>{
    //DELETE all selected  images from the  folder we delete from the front end and databaise  
     const users =  await User.find({'_id':{'$in':req.params.id.split(",")}});//STORE all selected data in users variable         
     
         users.map((e) => {

    // console.log(e.image);                  
    //             //for delete images from folder//for map only images we use e.image
                 fs.unlinkSync("public/images/"+e.image);//path of images
    //         });
    });
    try {

        //logic of delete multiple ids from databaise and from webpage // split(",") is use for covert string data in to aaray so we can delete full array at once

          await User.deleteMany({'_id':{'$in':req.params.id.split(",")}});

        res.json("delete user")
    }catch(error){
        console.log("error:"+ error.message);
        res.json({message:error.message});
    }
}

// for delete single image from the edit page of category 
export const deleteImage = async (req,res)=>{

const img =  req.body.image
    //for delete file or image from tha folder wher we are uploded user images 
    fs.unlinkSync("public/images/"+img);

    try{        
   

const user = await User.findByIdAndUpdate(
    req.body.id,
    
    {
$pull:{

        image:req.body.image
},
    },
    {new:true}    
)


//the try part is not working or no need till try end 

if(!user){

}
     
    res.json("delete image")
    // console.log("user",user);
}catch(error){
    res.json({message:error.message});
}
 }
// for delete single data of category
export const deleteSinglecat = async (req,res)=>{

    let user =  await User.find({_id: req.params.id});//save all selected data in users variable         

    user.map((e) => {//e save all data of user 
             
            //for delete images from folder
            fs.unlinkSync("public/images/"+e.image);//path of images and e save all data so we neww only image so we write e.image
        });

    try {
        //updateOne is use for update only one id (and updateMany use for update mant id) 
        await User.deleteOne({_id: req.params.id});
        res.json("delete user")
    }catch(error){
        res.json({message:error.message});
    }
}

