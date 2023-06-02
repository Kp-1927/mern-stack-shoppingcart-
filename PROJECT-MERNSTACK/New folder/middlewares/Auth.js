const jwt = require('jsonwebtoken');

const Auth = (req,res,next) => {
    try{
        const token = req.headers['x-auth-token'];
        if(!token){
            return res.status(400).json({
                message: 'missing Auth token'
            })
        }
        if(jwt.verify(token, 'iamaks')){
            next();
        }else{
            return res.status(401).json({
                message: 'unauthorized'
            })
        }
    }catch(err){
        return res.status(500).json({
            message: "Something went wrong",
            error: err.message
        })
    }
}

module.exports = Auth