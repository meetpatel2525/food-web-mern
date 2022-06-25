import mongoose from 'mongoose';
import { autoIncrement } from 'mongoose-plugin-autoinc';

//npm install mongoose-plugin-autoinc use for install autoIncrement

//for add category 

const categorySchema =  mongoose.Schema({
  
    name: String,
    status: String,
    image: String,
    description:String,
},{
    timestamps: true,
})

//autoIncrement is use for increment the id automatecly at browser and at databaise 
 categorySchema.plugin(autoIncrement,'categorys');

//model of category
const User =  mongoose.model('categorys',categorySchema);

export default User;