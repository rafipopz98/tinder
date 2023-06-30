import  Express  from "express";
import mongoose from "mongoose";
import Cards from './dbCards.js';
import Cors from 'cors'
// app config

const app=Express();
const port=process.env.PORT || 8001
const connection_url=`mongodb+srv://admin:root@cluster0.zkuceyu.mongodb.net/tinderdb?retryWrites=true&w=majority`
// MiddleWare
app.use(Express.json())
app.use(Cors())

// DB config
mongoose.connect(connection_url,{}
    // useNewUrlParser:true,
    // useCreateIndex: true,
    // UseFindAndModify: false,
    // useUnifiedTopology:true,
)


//API endpoints 
app.get("/",(req,res)=>res.status(200).send("jojoj"))

app.post("/cards", (req,res)=>{
    const dbCard=  req.body
    Cards.create(dbCard,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

app.get("/cards",  (req,res)=>{
    
     Cards.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{ 
            res.status(200).send(data)
        }
    })
})

// Listener
app.listen(port,()=>console.log(`listening on localhost:  ${port}`))