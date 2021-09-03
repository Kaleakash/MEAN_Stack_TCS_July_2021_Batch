// load the express module 
let express = require("express");
// This is use to create the router referene. 
// which help to route to controller function base upon the path.
let router = express.Router();
let productController = require("../controller/product.controller")

router.get("/getAllProducts",productController.getAllProductDetails);

module.exports=router;