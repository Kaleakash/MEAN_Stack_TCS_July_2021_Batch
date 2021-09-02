// load the module 
let mongoose = require("mongoose");
//url 
let url = "mongodb://localhost:27017/tcsmean";
mongoose.pluralize(null);           // to avoid lower case collection creation and adding s.

// connect the database it return promise object 
mongoose.connect(url).
then(res=>console.log("connected")).
catch(err=>console.log(err))

//to use this db connection we have to call function 
let db = mongoose.connection;
db.once("open",()=> {
    // We have to defined schema 
    let productSchema = mongoose.Schema({
        _id:Number,
        pname:String,
        price:Number
    });

    // using schema we have to create the model 
    //1st parameter collection name and 2nd parameter schema reference
    // mongoose intenrally create collection name in lower case 
    // with post fix s.
    let productModel = mongoose.model("Product",productSchema);
    
    productModel.updateOne({_id:108},{$set:{price:90000}},(err,result)=> {
        if(!err){
            console.log(result)
            if(result.modifiedCount>0 || result.matchedCount>0){
                    console.log("Product updated successfully")
            }else {
                    console.log("Prouct didn't update");
            }
        }else {
            console.log(err);
        }
        mongoose.disconnect();
    })
    

})