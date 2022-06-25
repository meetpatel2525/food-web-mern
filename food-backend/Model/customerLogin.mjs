import  mongoose  from 'mongoose';
import { autoIncrement } from 'mongoose-plugin-autoinc';

//for login schima

const customerLoginSchema = new mongoose.Schema({
    
    name:String,
    email: String,
    number:String,
    password: String,
    otp:String

},{
    //importent for switch model schimas 
    timestamps: true,
})
//autoIncrement is use for increment the id automatecly at browser and at databaise 
customerLoginSchema.plugin(autoIncrement,'customerlogins');
//model of login

const CustomerLog = new mongoose.model("customerlogins'", customerLoginSchema)

export default CustomerLog ;
