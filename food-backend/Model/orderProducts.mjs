import  mongoose  from 'mongoose';
import { autoIncrement } from 'mongoose-plugin-autoinc';

//npm install mongoose-plugin-autoinc use for install autoIncrement

//for add product 
var Schema = mongoose.Schema;

const orderProductSchema =  Schema({

    name:String,
    order_id:Number,
    p_id:Number,
    // category: { type:mongoose.Schema.Types.ObjectId, ref: 'categorys'},//if you use defolt mongodb object id 
    // category: { type:mongoose.Schema.Types.Number, ref: 'categorys'},//for autoincrementel id refrence
    // category:Number,
    qty:Number,
    price:Number,
//    tprice:Number   
},{
    timestamps: true,
})
//autoIncrement is use for increment the id automatecly at browser and at databaise 
orderProductSchema.plugin(autoIncrement,'orderProducts');

//model of category
const OrderPro =  mongoose.model('orderProducts',orderProductSchema);

export default OrderPro;