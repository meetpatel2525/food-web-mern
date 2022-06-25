import  mongoose  from 'mongoose';
import { autoIncrement } from 'mongoose-plugin-autoinc';

//npm install mongoose-plugin-autoinc use for install autoIncrement

//for add product 
var Schema = mongoose.Schema;

const ProductSchema =  Schema({
    // category: { type:mongoose.Schema.Types.ObjectId, ref: 'categorys'},//if you use defolt mongodb object id 
    proname: String,
    category: { type:mongoose.Schema.Types.Number, ref: 'categorys'},//for autoincrementel id refrence
    // category:Number,
    mrp:Number,
    discountmrp:Number,
    stock:Number,
    status:String,
    description:String,
    image: String,
},{
    timestamps: true,
})

//autoIncrement is use for increment the id automatecly at browser and at databaise 
ProductSchema.plugin(autoIncrement,'products');

//model of category
const Pros =  mongoose.model('products',ProductSchema);

export default Pros;