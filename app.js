let express = require('express');
let app = express();
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const dotenv = require('dotenv');
const { query } = require('express');
dotenv.config()
let port = process.env.PORT || 8230;
const mongoUrl = process.env.mongoUrlLive

app.get('/',(req,res)=>{
    res.send('<h1>Hey Welcome to the amazonC</h1>')
})


// Data 
app.get('/Data',(req,res)=>{
    db.collection('data').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
app.get('/Data/fashion',(req,res)=>{
    db.collection('fashion').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
app.get('/Data/electronics',(req,res)=>{
    db.collection('electronics').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
app.get('/Data/books',(req,res)=>{
    db.collection('books').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})



// Connection with db
MongoClient.connect(mongoUrl, (err,client) => {
    if(err) console.log(`Error while connecting`,err);
    db = client.db("amazonC");
    app.listen(port,() => {
        console.log(`Server is running on port ${port}`)
    })
})