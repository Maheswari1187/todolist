/* eslint-disable no-undef */
// server.js

const express=require('express');
const mongoose=require('mongoose');
const taskschema=require('./model');
const cors=require('cors');
//const app=express();
const app=express();
app.use(express.json());
app.use(cors({
  origin:'*'
}))
mongoose.connect('mongodb+srv://maheswari1187:Maheswari_18@maheswari.duqhamd.mongodb.net/todo?retryWrites=true&w=majority')
// {
//   useNewUrlParser:true,
//   useUnifiedTopology:true
.then(
()=>console.log('db connected')
)

 //app.get('/',(req,res) =>{
  // res.send('hello');
//})3
app.post('/addtask',async(req,res)=>{
  const{todo}=req.body;
  try{
    const newData=new taskschema({
      todo:todo
    })
    await newData.save();
    return res.json(await taskschema.find())
  }
  catch(err)
  {
    console.log(err);
  }
 
})
//to print the data
app.get('/gettask',async(req,res)=>{
  try{
      return res.json(await taskschema.find());
  }
  catch(err)
  {
    console.log(err);
  }
})

app.delete('/delete/:id',async(req,res)=>{
  try{
       await taskschema.findByIdAndDelete(req.params.id);
       return res.json(await taskschema.find())
  }
  catch(err)
  {
    console.log(err);
  }
})
app.listen(5000,()=> console.log('server running'));