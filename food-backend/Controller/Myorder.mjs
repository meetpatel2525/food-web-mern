// store cart data in tho multiple table at one time in databaise
import CartOfUser from "../Model/Cart.mjs";
import Order from "../Model/order.mjs";
import OrderPro from "../Model/orderProducts.mjs";
import Addresh from "../Model/Addresh.mjs";
// for add data
export const userorder = (req, res) => {
  // console.log("hello order API")
  const { u_id, odrdata,dplace, adrs_id, delevrycharge, payment, totalprice } =
    req.body;

  const userorderdetails = new Order({
    u_id,
    odrdata,
    adrs_id,
    dplace,
    delevrycharge,
    payment,
    totalprice,
  });

  // if(userorderdetails){
  Addresh.findOne(
    { u_id: userorderdetails.u_id, _id: userorderdetails.adrs_id },
    (err, adrss) => {
      const name = adrss.u_address.name;
      const phone = adrss.u_address.phone;
      const flatno = adrss.u_address.flatno;
      // const dplace = adrss.u_address.dplace;
      const address = adrss.u_address.address;
      const pincode = adrss.u_address.pincode;
      const city = adrss.u_address.city;

      const userorder = new Order({
        u_id,
        odrdata,
        adrs_id,
        delevrycharge,
        dplace,
        payment,
        totalprice,
        name,
        city,
        phone,
        flatno,
        address,
        pincode,
      });

      userorder.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully store data" });
        }

        //store data in 2nd table logic start

        var order_id = userorder._id;
        var tprice = userorder.totalprice;
        const products = req.body.odrdata;
        const orderproducts = [];

        console.log(order_id);
        //for sepret the data in multiple objects we use loope
        for (let index = 0; index !== products.length; index++) {
          const element = {};
          element.name = products[index].proname;
          element.price = products[index].mrp;
          // element.tprice = tprice;
          element.qty = products[index].qty;
          element.p_id = products[index]._id;
          element.order_id = order_id;
          orderproducts.push(element);
        }

        //all data are stored in a orderproducts
        console.log(orderproducts);
        //for insert multiple records at once

        OrderPro.insertMany(orderproducts, function (err, docs) {
          if (err) {
            return console.error(err);
          } else {
            console.log("Multiple documents inserted to Collection");
          }
        });
      });
    }
  );
};

/// all  order data

//for display all data of order
export const getOrders = async (req, res, next) => {
  console.log(req.body);
  try {
    //for sorting
    var mysort = { _id: -1 };
    //for save the data in momgodb from req.body
    let allorders = await Order.find().sort(mysort);
    res.json(allorders);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//for display all data

export const getview = async (req, res) => {
  console.log("view");
  const id = req.params.id;
  // console.log(id);
  try {
    //user store the all data of that id
    const user = await Order.findById(id);
    console.log(user);
    res.json(user);
  } catch (error) {
    res.json({ message: console.error.message });
  }
};

//my orders

export const getMyOrders = async (req, res) => {
  let customer = req.params.id;
  // console.log(customer);
  try {
    console.log("my order");
    const Myorder = await Order.find({ u_id: customer });

    // user = Myorder.toObject()
    console.log(Myorder);
    res.json(Myorder);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//my order End

//my orders cart data manage end
function runUpdate(condition, updateData) {

  return new Promise((resolve, reject) => {
    //you update code here if same product than it will reject and its not run if diffrent product its run an update

    CartOfUser.findOneAndUpdate(condition, updateData, { upsert: true })
      .then((result) => resolve())
      .catch((err) => reject(err));
  });
}

//add data of cart in the databaise after login
export const carts = (req, res) => {
  var { products, u_id } = req.body;
  CartOfUser.findOne({ u_id: u_id }, (err, cartOfUser) => {
    // if  user cart is alredy created than it update data in cart
    if (cartOfUser) {
      let promiseArray = [];

        products.forEach((cartItem) => {
        
          const product = cartItem._id;
        //if same  user id  enter same product id and new product id are same than ..its run
        const item = cartOfUser.products.find((c) => c._id == product);
        // console.log(item);
        let condition, update;
        if (item) {
          console.log("if call");

          //if same  user id  &&  same product id and new product id are same
          condition = { u_id: u_id, "products._id": product };//if u want to faind object id from the array of object u can use  "arrayname.objectname";
          //  hear product store product id 
         
          // and its set product means replay by the same product
          update = {
            $set: {
              "products.$":{
                ...cartItem, qty:item.qty+cartItem.qty
              } 
            },
          };
                    
          // console.log(update);
          console.log(condition);
          // console.log(cartItem.qty);
        } else {

          console.log("else call");
          //if user enter difrent froduct than it update the item in the array
          condition = { u_id: u_id };

          update = {

            $push: {
              products: cartItem,
            },
          };
        }
        // console.log(update);

        //make primis like pandinf and resolve
        promiseArray.push(runUpdate(condition, update));
      });

      Promise.all(promiseArray)
        .then((response) => res.status(201).json({ response }))
        .catch((error) => res.status(400).json({ error }));
    } else {
      const cart = new CartOfUser({ u_id: u_id, products: products });

      //  console.log(cart);
      // console.log(cart);
      
      cart.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Product added sussesfully." });
          console.log();
        }
      });
    }
  });
};

//cart data manage end

// export const carts =  (req,res)=>{

//   console.log("strat");

// //     CartOfUser.findOne({u_id:u_id},(err,cartOfUser)=>{

//    CartOfUser.findOne({u_id:req.body.u_id},(err,cartOfUser)=>{
//     console.log("go");
//     if(cartOfUser){
//       //if cart of user id is alredy created than update the cart
//     // res.status(200).json({message:cartOfUser})
//     // console.log({products:req.body.products});
//     CartOfUser.findOneAndUpdate({u_id:req.body.u_id},{
//       '$push':{
//         'products':req.body.products,
//     }
//    })
//       if (err) return res.status(400).json({ err });
//       if (cartOfUser) {
//         return res.status(201).json({ cartOfUser:cartOfUser });
//    }
//     console.log("edit done");
//    }else{
//       console.log("new user");
//       const cart = new CartOfUser({ u_id:req.body.u_id,products:req.body.products});
//       console.log(cart);
//       cart.save((err, cart) => {
//         if (err) return res.status(400).json({ err });
//         if (cart) {
//           return res.status(201).json({ cart });
//         }
//       });
//     }
//   })
//     }

//for display all data of user cart

export const getCart = async (req, res, next) => {
  const id = req.params.id;

  // console.log("get cart data");
  try {
    // console.log("getcart api");
    // //for sorting
    // var mysort = { _id: -1 };
    //for save the data in momgodb from req.body

    let cartdata = await CartOfUser.find({ u_id: id });
    // console.log(cartdata);
    res.json(cartdata);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const cartUpdate = async (req, res, next) => {
  console.log("lets update qty");
  const id = req.params.id;
  const data = req.body;
  const pid = data._id;
  const dqty = data.qty;
  // const pid = data._id
  console.log(dqty);
  // console.log(data.qty);
  // const editproduct = new CartOfUser(data);
  // const editqty = new CartOfUser(data);

  // data.forEach((cartItem) => {

  // const item = CartOfUser.products.find((c) => c._id == pid);

  var condition = {
      u_id: id,
    },
    update = { products: data };

  // });
  try {
    console.log(condition);
    console.log(update);
    // console.log({"u_id": id, "products":data});

    await CartOfUser.updateOne(condition, update);

    // console.log(editqty);
    // //for sorting
    // var mysort = { _id: -1 };
    //for save the data in momgodb from req.body

    // let cartdata =  await CartOfUser.find({u_id:id})
    // console.log({products:editqty});
    // console.log({u_id:id});
    // await CartOfUser.updateOne({u_id:id});

    res.json(update);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// for delete single object from the aarray
export const cartprodelete = async (req, res) => {
  console.log("cart delete");

  const pid = req.body._id;
  const uid = req.body.u_id;

  if (pid) {
    await CartOfUser.updateOne(
      { u_id: uid },
      {
        $pull: {
          products: {
            _id: pid,
          },
        },
      }
    );
  }
  res.json("delete");
};

//storage addresh
export const usersaddress = async (req, res) => {
  const { u_id, u_address } = req.body;

  const newUser = new Addresh({ u_id, u_address });
  console.log(newUser);
  try {
    // newuser.save is use for save the data in databaise and data comse from from req.body
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//get all adress of perticuler user

export const getAllAdress = async (req, res, next) => {
  const id = req.params.id;

  try {
    // console.log("getcart api");
    // //for sorting
    // var mysort = { _id: -1 };
    //for save the data in momgodb from req.body

    let cartdata = await Addresh.find({ u_id: id });
    // console.log(cartdata);
    res.json(cartdata);
  } catch (error) {
    res.json({ message: error.message });
  }
};
// update order status  using promise
  
// set fromise function
function runUpdateState(condition, updateData) {

  return new Promise((resolve, reject) => {
    //you update code here if same product than it will reject and its not run if diffrent product its run an update

    Order.findOneAndUpdate(condition, updateData,{ upsert: true })
      .then((result) => resolve())
      .catch((err) => reject(err));
  });
}

//update status logic 

export const updatestatus =  (req, res, next) =>  {

    const id = req.params.id;
    // const data  = req.body;
    var data = req.body
    // console.log(data);
    const status = req.body.status;
   
  
Order.findOne({_id:id}, (err, order) => {



if(order){

  let promiseArray = [];

  const item = order.statuslog.find((c)=>c.status == status);
 
  console.log(item);
  let condition, update;

if(item){
 
 condition = {_id:id}

 update = {

 
};

}else{

  condition = {_id:id}
  
  update =     {

   $push: {
   statuslog:[data],
     // updatedAt:  new Timestamp(),
   },
   $set: {
     status: status,
   },
 };

}

   //make promise and push in array for recive and resolve the condition 
   promiseArray.push(runUpdateState(condition, update));
    
   //we can use promis when we can to use async await when use mongodb mether inside another methord
  Promise.all(promiseArray)
  .then((response) => res.status(201).json({ response }))
  .catch((error) => res.status(400).json({ error }));


}

})

}
   
// lode address data for edit

export const lodeadrs = async(req,res)=>{
  const id = req.params.id;
  console.log(id);
  try {
//user store the all data of that id 
const lodeadrs = await Addresh.findById(id);
res.json(lodeadrs);
  }catch (error){
      res.json({message:console.error.message});
  }    
}


// edit the values of address 

export const   editadress  = async (req,res)=>{
   
  //for edit only value not for image 
  console.log("edit call");


  var adress = req.body;//user hold the data we want to edit new 

     try {
  
         //updateOne is use for update only one id (and updateMany use for update mant id) 
  const editDone =  await Addresh.updateOne({_id: req.params.id},{u_address:adress});//editcategory hold the new edit data for update 
     console.log(editDone);
       res.json(editDone)   
     }catch(error){
         res.json({message:console.error.message});
     }
  }
  
  // for delete single address

  export const deleteAdrs = async (req,res)=>{

  // let user =  await Addresh.find({_id: req.params.id});//save all selected data in users variable         

  // user.map((e) => {//e save all data of user 
           
  //         //for delete images from folder
  //         fs.unlinkSync("public/images/"+e.image);//path of images and e save all data so we neww only image so we write e.image
  //     });

console.log("delete address call");
  try {
      //updateOne is use for update only one id (and updateMany use for update mant id) 
      await Addresh.deleteOne({_id: req.params.id});
      res.json("delete user")
  }catch(error){
      res.json({message:error.message});
  }
}
