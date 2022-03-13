const mongoose=require('mongoose')
const ProfileSchema = new mongoose.Schema({

    username : {type:String, default:'username'},
    age :{type : Number, default:0},
    imageUrl : String,
    formateur : {type  : String, default:'no formateur'},
    formation: {type : String, default:'no formation'},
    groupe : {type  : String, default:'no groupe'},
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "user"
    }
    
})
module.exports=mongoose.model("profile",ProfileSchema)
