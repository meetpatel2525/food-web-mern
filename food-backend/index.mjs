import CustomerLog from "./Model/CustomerLogin.mjs";
import express, { application } from "express";
import cors from "cors";
import mongoose from "mongoose";
import  multer from 'multer';
import bodyParser from 'body-parser';
import { addCategory,editCategory } from "./Controller/controler.mjs";
import Logg from "./Model/logSchima.mjs";
import { addProduct, editProduct} from "./Controller/ProductControler.mjs";
import categoryrouter from "./rauter/categoryRouter.mjs";
import productrouter from "./rauter/productsRouter.mjs";
import ordersrouter from "./rauter/orderrouter.mjs";


//for otp genrate
import otpGenerator  from 'otp-generator';


const app = express()

app.use(express.json())
app.use(express.urlencoded())

//hear we use this becouse defain public folder as a defolt and show that iamge on browser
app.use('/public',express.static('public'));

//bodyparser is use as a middlewher and install it before use npm i body-parser  
app.use(bodyParser.json({extended:true}));
//for encode the url 
app.use(bodyParser.urlencoded({extended:true}))

//(npm i corse) for use to safty for asses code on diffrent port
app.use(cors());

//hear we defain the path of api and router names as midelwer 

app.use('/', categoryrouter)
app.use('/',productrouter)
app.use ('/',ordersrouter)
//connection with databise of mongodb 

mongoose.connect("mongodb://localhost:27017/myfood", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}, () => {
    console.log("DB connected")
})

//category storage

// hear we use multer for  store and uplode image //multer is middlwer
//  store is use for store 
 var storage = multer.diskStorage({
    destination: function (req, file, cb){
     //hear we defain the pathe where img is uplode 
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {

      //hear we defain  what is the name of the file 
      cb(null, Date.now() + '_'+ file.originalname )
    }
  })

//for uplode image in file

  var upload = multer({  storage: storage });

//product storage

// hear we use multer for  store and uplode image //multer is middlwer
//  store is use for store 
var storagee = multer.diskStorage({
  destination: function (req, file, cb){
   //hear we defain the pathe where img is uplode 
    cb(null, 'public/product')
  },
  filename: function (req, file, cb) {
    //hear we defain  what is the name of the file 
    cb(null, Date.now() + '_'+ file.originalname )
  }
})

//for uplode image in file

var uploadd = multer({  storage: storagee });

//admin login logic start

//admin Route for login 
app.post("/login", (req, res)=> {          
  //get email and password
  const { email, password} = req.body
  //chek the email in databise is match or not 
  Logg.findOne({ email: email}, (err, logg) => {

      if(logg){
          //chek password is curect as user databise and than send the message in front end for popup mesaage 
          if(password === logg.password ) {
              res.send({message: "Login Successfull", logg:logg})
          } else {
              res.send({ message: "Password didn't match"})
          }
      } else {
          res.send({message: "User not registered"})
      }
  })
}) 

//customer registraion logic start

  app.post("/customerregister",(req, res)=> {
  const { name,number,email,password} = req.body
 
  CustomerLog.findOne({email:email}, (err, customerlog) => {
    console.log(customerlog);
      if(customerlog){
        res.send({message: "User already registerd"});
        }else{
          const customerlog = new CustomerLog({
                       name,
                      number,
                      email,
                      password
          })       
          // console.log(customerlog);       
          customerlog.save(err => {
              if(err) {
                  res.send(err)
              } else {
                 res.send( { message: "Successfully Registered, Please login now." })
              console.log();
                }
          })
      }
  })
}) 

//genrate otp and save 

app.post("/otpgenrate/:id", async (req, res)=> {

console.log("otp");
// console.log(req.params);
const {id} = req.params;
const Otp =  otpGenerator.generate(6, { upperCaseAlphabets: true, specialChars: false });

// console.log(customerlog);

  await CustomerLog.findOneAndUpdate({_id:id},
    {
      $set: {
        otp:Otp ,
    }
  })

})

//customer login 
app.post("/customerlogin", (req, res)=> {
  const { email, password} = req.body
  CustomerLog.findOne({ email: email}, (err, customerlog) => {
    // console.log(customerlog);
    if(customerlog){
          if(password === customerlog.password ) {
              res.send({message: "Login Successfull", customerlog: customerlog})
          } else {
              res.send({ message: "Password didn't match"})
          }
      } else {
          res.send({message: "User not registered"})
      }
  })
}) 

//customer login logic end
//roters

//edit data of category
categoryrouter.put('/editcat/:id',upload.single('myFile'),editCategory)

//for add data 
categoryrouter.post('/addcategory',upload.single('myFile'),addCategory)

// addproducts
productrouter.post('/addproducts',uploadd.single('prodFile'),addProduct)//hear we add * becose of addcategory hase seme method post and also  url is same first  so 

//edit data of product
productrouter.put('/:id',uploadd.single('prodFile'),editProduct);

//port111
app.listen(9002,() => {
    console.log("BE started at port 9002")
})
