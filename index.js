const express= require ('express');

const path= require ('path');

const cors= require ('cors');

const db = require ('./config');

const bodyParser= require =('body-parser');

const port= parseInt(process.env.port) || 4000;

const app= express();

const route= express.Router();

// const {errorHandling}=require ('./middleware/ErrorHandling');

//HOME
route.get('/', (req,res)=>{
    res.json ({msg: "Welcome"})
})

app.listen (app.get ('port'),()=>{
    console.log ('Listening for calls on port $ {app.get("port")} ');
})