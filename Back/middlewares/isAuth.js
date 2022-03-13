const  jwt  = require("jsonwebtoken");
const UserSchema = require('../models/auth')


const isAuth=async(req,res,next)=>{

    try {
        const token=req.headers['authorization']
        if(!token){
            return res.send('you are not authorized')
        }
        var decoded = jwt.verify(token, 'secret');

        const user = await UserSchema.findById(decoded._id)
        req.user=user
        next()
    } catch (error) {
        res.status(500).send({ errors:[{msg:'token server error'}]  })

        
    }
}

module.exports=isAuth