const express = require("express")
const authRout = express.Router()
const UserSchema = require('../models/auth')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { registerValidation,validator } = require("../middlewares/validation")
const isAuth = require("../middlewares/isAuth")
const upload = require("../middlewares/upload")
const auth = require("../models/auth")

authRout.post('/signup',registerValidation,validator, async (req, res) => {
    const { email, password } = req.body
    try {
        const user = new UserSchema(req.body)
        const found = await UserSchema.findOne({ email })
        if (found) { return res.status(400).send("user exist") }
        const salt = 10
        const hachedPwd = bcrypt.hashSync(password, salt)
        user.password = hachedPwd

        await user.save()
        //Token
        const payload = { _id: user._id }
        const token = jwt.sign(payload, 'secret')
    
        res.status(200).send({ msg: 'register successed', user,token })

    } catch (error) {
        res.status(500).send({ errors:[{msg:'could not register'}]  })

    }
})
authRout.post('/addformateur',registerValidation,validator, async (req, res) => {
    const { email, password} = req.body
    try {
        const formateur = new UserSchema(req.body)
        const found = await UserSchema.findOne({ email })
        if (found) { return res.status(400).send("user exist") }
        const salt = 10
        const hachedPwd = bcrypt.hashSync(password, salt)
        formateur.password = hachedPwd
        


        await formateur.save()

        res.status(200).send({ msg: 'register successed', formateur })

    } catch (error) {
        res.status(500).send({ errors:[{msg:'could not register'}]  })

    }
})

authRout.post('/signin', async(req,res)=>{
    const { email, password } = req.body

    try {
        const user =await UserSchema.findOne({email})
     
        if (!user) {return    res.status(400).send({errors:[{msg:"bad credentials email"}]}) }

        const match = bcrypt.compareSync(password,user.password)

        if(!match){return    res.status(400).send({errors:[{msg:"bad credentials password"}]}) }
        const payload = { _id: user._id }
        const token = jwt.sign(payload, 'secret')

        res.status(200).send({ msg: 'Login successed', user, token })

    } catch (error) {
        res.status(500).send({ errors:[{msg:'could not login'}]  })
        
    }
})

authRout.get('/me', isAuth,  (req,res)=>  res.send(req.user)  )
authRout.get('/users',  async(req,res)=>{
    
    try {
        const users=await UserSchema.find()
        res.send(users)
    } catch (error) {
        res.status(500).send('error server')

    }
}
)
authRout.delete("/users/:userid",async(req,res)=>{
    const {userid}=req.params
    // console.log(userid)
    try {
        await UserSchema.findByIdAndDelete(userid)
        res.send('user deleted')
    } catch (error) {
        res.status(500).send('error server')
    }
}
)
authRout.put("/me/:userid",isAuth,upload.single("myImage"), async(req,res)=>{
    const {userid}=req.params
    if(!req.file){
        return res.status(400).send('error no file')
    }
    try {
        await UserSchema.findByIdAndUpdate(
            userid,
            {$set:
                {username :req.body.username, age : req.body.age, imageUrl : req.file.filename }})
        
        res.send('profile updated')
    } catch (error) {
        res.status(500).send('error server')
    }
})



authRout.put("/users/:userid",async(req,res)=>{
    const {userid}=req.params
    try {
        await UserSchema.findByIdAndUpdate(userid,{$set:{...req.body}})
        res.send('profile updated')
    } catch (error) {
        res.status(500).send('error server')
    }
})
authRout.put("/quiz/:userid",async(req,res)=>{
    const {userid}=req.params
    const {quiz}=req.body
    try {
        await UserSchema.findByIdAndUpdate(userid,{$push:{quiz : quiz}})
        res.send('profile updated')
    } catch (error) {
        res.status(500).send('error server')
    }
})

authRout.put('/')

module.exports=authRout
