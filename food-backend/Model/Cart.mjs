import  mongoose  from 'mongoose';
import { autoIncrement } from 'mongoose-plugin-autoinc';

//for login schima

const cartSchema = new mongoose.Schema({
  
    u_id:Number,
products:Array,
    // image:String,
    // description:String,
    // proname:String,
    // discountmrp: Number,
    // mrp:Number,
    // qty: Number, 
},{
    //importent for switch model schimas 
    timestamps: true,
})
//autoIncrement is use for increment the id automatecly at browser and at databaise 
cartSchema.plugin(autoIncrement,'cartdata');
//model of login

const CartOfUser = new mongoose.model("cartdata'", cartSchema)

export default CartOfUser ;
