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

    // using model we have to create the reference. 
    let p1 = new productModel({_id:100,pname:"TV",price:120000});
    let p2 = new productModel({_id:101,pname:"Computer",price:55000});
    let p3 = new productModel({_id:102,pname:"Laptop",price:850000});
    let p4 = new productModel({_id:103,pname:"Mobile",price:65000});

    productModel.insertMany([p1,p2,p3,p4],(err,result)=> {
            if(!err){
                console.log(result)
            } else {
                console.log(err);
            }
            mongoose.disconnect();  
    })
})