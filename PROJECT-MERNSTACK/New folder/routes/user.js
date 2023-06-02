const express = require('express');
const bcryptjs = require('bcryptjs');
const {User} = require('../models/User');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/add', async (req, res) => {
    try{

        let {full_name,email,password} = req.body;
        
        const salt = await bcryptjs.genSalt(10);
        password = await bcryptjs.hash(password, salt);
        
        const user = new User({full_name, email, password});
        await user.save();
        return res.status(200).json({
            message: 'User saved successfully',
            user
        })
    }catch(err) { 
        return res.status(500).json({
            message:"Something went wrong",
            error: err.message
        })
    }
})

router.post('/login', async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email:email});
        if(user){
            const verifyUser = await bcryptjs.compare(password,user.password);
            if(verifyUser){
                const payload = {
                    user:{
                        id: user._id
                    }
                }
                const token = jwt.sign(payload, 'iamaks',{expiresIn:3600})
                res.status(200).json({
                    message: 'User logged in successfully',
                    user:{user_id:user._id,eamil:user.email},
                    token
                })
            }else{
                res.status(401).json({
                    message: 'Invalid email or password'
                })
            }
        }else{
            res.status(401).json({
                message: 'Invalid email or password'
            })
        }
    }catch(err){
        res.status(500).json({
            message:"Something went wrong"
        })
    }
})
module.exports = router;