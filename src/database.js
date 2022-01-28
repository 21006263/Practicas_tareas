import {connect} from 'mongoose';
 import {openUri} from "./config";


(async ()=> {
    try{
    const db = await  connect(openUri)// si no te funciona con localhost se le pasa 0.0.0.0
    console.log('DB connected to', db.connection.name)
    }catch (error){
    console.error(error)
    }
})()


/*
const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);
a

const uri = "mongodb://0.0.0.0:27017/";
const client = new MongoClient(uri);*/