import mongoose from 'mongoose';

//for login schima

const logSchema = new mongoose.Schema({
    
    email: String,
    password: String
},{
    //importent for switch model schimas 
    timestamps: true,
})

//model of login
const Logg = new mongoose.model("Logg", logSchema)

export default Logg ;







