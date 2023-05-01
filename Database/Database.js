const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");



app.use(express.json())
app.use(cors())
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// database connection

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "password",
  database: "SocialSparkDB",
});

db.connect((err) => {
  if (err) {
    console.log(err.message);
    return;
  }

  console.log('Connected to database')
})

app.use(bodyParser.json());
app.get("/", (_req,res)=>{
    res.json("socialspark")
})



app.get("/volunteer", (_req, res)=> {
    const q = "SELECT * FROM volunteer"
    db.query(q,(err, data)=> {
        if (err) console.log(err)
        res.send(data)
    })
})


app.post('/volunteer', (req, res) => {
  const { fullname, org_name, work_type, vol_hours } = req.body;
  const insertQuery = `INSERT INTO volunteer ( fullname, org_name, work_type, vol_hours) VALUES (?, ?, ?, ?)`;
  db.query(insertQuery, [ fullname, org_name, work_type, vol_hours], (err, results) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});


app.listen(8009, ()=>{
    console.log("Connected to backend!")
})

