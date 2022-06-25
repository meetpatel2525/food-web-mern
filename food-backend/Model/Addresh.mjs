import  mongoose  from 'mongoose';
import { autoIncrement } from 'mongoose-plugin-autoinc';

//for login schima

const AddreshSchema = new mongoose.Schema({

    u_id:Number,
    u_address:Object,    
},{
    //importent for switch model schimas 
    timestamps: true,
})
//autoIncrement is use for increment the id automatecly at browser and at databaise 
AddreshSchema.plugin(autoIncrement,'addresh');
//model of login

const Addresh = new mongoose.model("addresh", AddreshSchema)

export default Addresh ;
