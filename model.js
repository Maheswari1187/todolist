const mongoose=require('mongoose');

const taskschema=new mongoose.Schema({
    todo:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model('Taskschema',taskschema);