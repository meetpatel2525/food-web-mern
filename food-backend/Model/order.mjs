import  mongoose  from 'mongoose';
import { autoIncrement } from 'mongoose-plugin-autoinc';

//npm install mongoose-plugin-autoinc use for install autoIncrement

//for add product 
var Schema = mongoose.Schema;

const orderSchema =  Schema({

    u_id:Number,
    odrdata:Array,
    adrs_id:Number,
    name:String,
    totalprice:Number,
    delevrycharge:Number,
    dplace:String,
    // category: { type:mongoose.Schema.Types.ObjectId, ref: 'categorys'},//if you use defolt mongodb object id 
    // category: { type:mongoose.Schema.Types.Number, ref: 'categorys'},//for autoincrementel id refrence
    // category:Number,
    
    phone:Number,
    flatno:String,
    address:String,
    pincode:Number,
    city:String,
    payment:String,
    statuslog:Array,
    status: {
        type: String,
        default: "panding",
        enum: [
          "panding",
          "Processing",
          "packed",
          "Shipped",
          "Delivered",
          "Cancelled",
        ],
        // date: {
        //     type: Date,
        //   },
      },
    // date:String,
    // time:String, 
},{
    timestamps: true,
})

//autoIncrement is use for increment the id automatecly at browser and at databaise 
orderSchema.plugin(autoIncrement,'orders');

//model of category
const Order =  mongoose.model('orders',orderSchema);

export default Order;