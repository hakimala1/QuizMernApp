const mongoose = require('mongoose')

const connectDb = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI || "mongodb+srv://hakim:TuuR053wMCyk1PaL@mernapp.nr80f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
        console.log('DB connected')
    } catch (error) {
        console.log({msg : 'DB connected',error})
    }
}

module.exports=connectDb