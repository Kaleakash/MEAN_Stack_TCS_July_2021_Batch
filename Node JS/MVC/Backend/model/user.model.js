let mongoose = require("mongoose");

mongoose.pluralize(null);

let userSchema = mongoose.Schema({
    email:{type:String,unique:true},
    password:{type:String}
});

let userModel = mongoose.model("User",userSchema);

module.exports=userModel;