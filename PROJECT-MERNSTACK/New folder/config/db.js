const mongoose = require('mongoose');

exports.dbConn = ()=>{
    const dbURL = "mongodb+srv://Khushi_pradhan:khushi2708@project0.rxb4o.mongodb.net/productdb?retryWrites=true&w=majority"
    mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true}).then((result)=>{
    console.log("Database Connected");
    }).catch((err)=>console.log(err));
}