const mongoose=require('mongoose')
const RoomSchema = new mongoose.Schema({
 
        nameQuiz : {type : String , unique:true , required: true},
        groupe : {type : String , unique:true , required: true},
})    

module.exports=mongoose.model("room",RoomSchema)