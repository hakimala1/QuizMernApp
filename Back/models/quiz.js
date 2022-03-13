const mongoose=require('mongoose')
const QuizSchema = new mongoose.Schema({
 
        nameQuiz : {type : String , unique:true , required: true},
        question : {type : String , unique:true , required: true}, 
        answers : {type:Array},
        correct : {type:String},
        groupe : {type : String}
})    

module.exports=mongoose.model("quiz",QuizSchema)