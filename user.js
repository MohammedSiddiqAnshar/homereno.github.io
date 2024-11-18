const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    Email: {
        type:String,
        required: true
        
    },    
    Address:{
        type: String,
        required: true

    },
    Country: { 
        type: String, enum: ['India', 'China', 'Nepal', 'Myanmmar'], // Define the possible values required: true 
    },
    phone: {
        type:Number,
        required:true
    }});

const LoginModel = new mongoose.model('login', LoginSchema);

module.exports = LoginModel;