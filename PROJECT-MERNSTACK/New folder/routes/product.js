const express = require('express');
const{Product} = require("../models/Product");
// const Auth = require('../middlewares/Auth');
const router = express.Router();


router.get('/', async(req, res) => {
    try{
        const products = await Product.find();
        return res.status(200).json({
            message: "Products in the cart are:",
            products
        })
    }
    catch(err){
        return res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })
    } 
})

// router.post("/add", Auth ,async(req,res)=>{
//     try{
//         const {product_name,product_price,product_image} = req.body
//         if(product_name=='' && error == ''){
//             error = "Missing Product Name"
//             return res.status(400).json({
//                 message: error
//             })
//         }
//         if(product_price=='' && error == ''){
//             error = "Missing Product Price"
//             return res.status(400).json({
//                 message: error
//             })
//         }
        
//         const ProductObj = {
//             product_name,
//             product_price,
//             product_image,
//         }

//         const product = new Product(ProductObj);
//         await product.save();
//         res.status(200).json({
//             message: "Product Added Successfully"
//         })
//     }catch(err){
//         res.status(500).json({
//             message : "Something went wrong2",
//             error : err.message
//         })
//     }
// })

router.post("/add",async(req,res)=>{
        try{
            const {product_name,product_price,product_image} = req.body
            if(product_name=='' && error == ''){
                error = "Missing Product Name"
                return res.status(400).json({
                    message: error
                })
            }
            if(product_price=='' && error == ''){
                error = "Missing Product Price"
                return res.status(400).json({
                    message: error
                })
            }
            
            const ProductObj = {
                product_name,
                product_price,
                product_image
            }
            const product = new Product(ProductObj);
            await product.save();
            res.status(200).json({
                message: "Product Added Successfully"
            })
        }catch(err){
            console.log(err.message);
            res.status(500).json({
                message : "Something went wrong2",
                error : err.message
            })
        }
    })

router.put("/update/:id",async (req, res)=>{
    try{
        const id = req.params.id;
        const {product_name, product_price, product_image} = req.body;
        if(product_name=='' || product_name  == undefined){
            error = "Missing Product Name"
            return res.status(400).json({
                message: error
            })
        }
        if(product_price=='' || product_price  == undefined){
            error = "Missing Product Price"
            return res.status(400).json({
                message: error
            })
        }
        await Product.findByIdAndUpdate(id,{product_name, product_price,product_image})
        return res.status(200).json({
            message: 'Product updated successfully',
        })
    }catch(err){
        return res.status(500).json({
            message: 'Something went wrong',
            error: err.message
    })}
    
})

router.delete('/del/:id',async(req, res) => {
    try{
        await Product.findByIdAndDelete (req.params.id)
        return res.status(200).json({
        message: 'Product deleted successfully',
    })
    }catch(err){
        return res.status(500).json({
            message: 'Something went wrong',
            error: err.message
    })}
})

router.get('/:name', async(req,res) => {
    try{
        const product_name = req.params.product_name;
        const product = await Product.findOne({product_name:req.params.name});
        res.status(200).json({
            message: 'Product found successfully',
            product
        })
    }catch(err){
        res.status(500).json({
            message: 'Something went wrong',
            error: err.message
        })
    }
})

module.exports = router;