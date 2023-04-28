const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

app.use(express.json())
app.use(cors())

// database connection

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'password',
  database: 'SocialSparkDB'
})

db.connect(err =>{
  if(err){
    console.log(err.message)
    return;
  }
  console.log('Connected to database')
})

app.get("/", (_req,res)=>{
    res.json("helloVAB")
})


app.get("/volunteer", (_req, res)=> {
    const q = "SELECT * FROM volunteer"
    db.query(q,(err, data)=> {
        if (err) console.log(err)
        res.send(data)
    })
})

app.listen(8005, ()=>{
    console.log("Connected to backend!")
})
