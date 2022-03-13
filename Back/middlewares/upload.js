const multer = require('multer')
const path = require('path')

const storage= multer.diskStorage({
    destination : '../client/public/uploads',
    filename : function(req,file,cb){
        cb(null,file.fieldname+"-"+Date.now()+path.extname(file.originalname))
    }
})

const upload=multer({
    storage : storage,
    limits :{
        fileSize:100000
    },
    fileFilter: function(req,file,cb){
        const fileTypes =/jpeg|png|jpg /i
        const mimeType = fileTypes.test(file.mimetype)
        if (mimeType){
            cb(null,true)
        }
        else
        {cb(null,false)}
    }
})

module.exports=upload