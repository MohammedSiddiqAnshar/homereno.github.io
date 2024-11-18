const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    Email: {
        type:String,
        required: true
        
    },
    specification: {
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true

    },
    Country: { 
        type: String, enum: ['India', 'China', 'Nepal', 'Myanmmar'], // Define the possible values required: true 
    },
    phone: {
        type:Number,
        required:true
    },
    Gender:{
        type:String,
        enum:['Male', 'Female', 'Transgender']
    }
});

const RegisterModel = new mongoose.model('register', RegisterSchema);
module.exports = RegisterModel;