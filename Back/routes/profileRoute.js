const express = require("express")
const isAuth = require("../middlewares/isAuth")
const upload = require("../middlewares/upload")
const ProfileSchema = require("../models/profile")
const profileRout = express.Router()

profileRout.post('/signup', isAuth, async (req, res) => {
    const {userId}=req.body
    try {
        const profile = new ProfileSchema({
            userId : req.user.id
        })
        const found = await ProfileSchema.findOne({ userId })
        if (found) { return res.status(400).send("user exist") }
        await profile.save()
        res.send(profile)
       

    } catch (error) {
        res.status(500).send({ errors:[{msg:'could not create profile'}]  })

    }
})

profileRout.put("/users/:userid",async(req,res)=>{
    const {userid}=req.params
    try {
        await ProfileSchema.findOneAndUpdate({userId :userid},{$set:{...req.body}})
        res.send('profile updated')
    } catch (error) {
        res.status(500).send('error server')
    }
})

profileRout.get('/users',  async(req,res)=>{
    
    try {
        const profiles=await ProfileSchema.find()
        res.send(profiles)
    } catch (error) {
        res.status(500).send('error server')

    }
})
module.exports=profileRout