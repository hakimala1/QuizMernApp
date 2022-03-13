const mongoose=require('mongoose')
const UserSchema = new mongoose.Schema({

    email : {type : String , unique:true , required: true},
    password : {type : String , required: true},
    role : {type : String},
    username : {type:String, default:'username'},
    age :{type : Number, default:0},
    imageUrl : String,
    formateur : {type  : String, default:'no formateur'},
    formation: {type : String, default:'no formation'},
    groupe : {type  : String, default:'no groupe'},
    quiz:[Object]

    
})

module.exports=mongoose.model("user",UserSchema)