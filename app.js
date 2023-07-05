const express = require("express");
const app= express();
const port=5000;
const path= require("path");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types
const bcrypt = require('bcrypt');
const cors = require('cors');
app.use(cors());
const jwt =require("jsonwebtoken");
//const Jwt_secret="fadshhhhhhhhh";
//const requireLogin= require("../middlewares/requireLogin")
// const cors = require("cors");
// //  require('./models/model');
// app.use(cors());
//   app.use(require("./routes/auth"));
app.use(express.json())
mongoose.connect("mongodb+srv://nidhimehra850:e2vI2OlP1yM7xR5j@cluster0.6bamle7.mongodb.net/?retryWrites=true&w=majority");
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    Photo: {
        type: String,
    },
    // followers: [{ type: ObjectId, ref: "USER" }],
    // following: [{ type: ObjectId, ref: "USER" }]
})

const USER = new mongoose.model("USER", userSchema)

app.get('/',(req,res)=>{
    res.json("hello nidhi");
})
app.post('/signup',(req,res)=>{
    const { name, userName, email, password } = req.body;
    if (!name || !email || !userName || !password) {
        return res.status(422).json({ error: "Please add all the fields" })
    }
    USER.findOne({ $or: [{ email: email }, { userName: userName }] }).then((savedUser) => {
    if (savedUser) {
        return res.status(422).json({ error: "User already exist with that email or userName" })
    }
    bcrypt.hash(password, 12).then((hashedPassword) => {
    const user = new USER({
        name,
        email,
        userName,
        password:hashedPassword
    })

    user.save()
                .then(user => { res.json({ message: "Registered successfully" }) })
                .catch(err => { console.log(err) })
})
})
})
app.post('/signin',(req,res)=>{
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).json({ error: "Please add email and password" })
    }
    USER.findOne({ email: email }).then((savedUser) =>{
      if(!savedUser){
    const token = jwt.sign({_id:savedUser.id},Jwt_secret);
        // console.log(token);
        // res.send(token);
        return res.status(422).json({error:"Invalid email"})
      }
      bcrypt.compare(password, savedUser.password).then((match) =>{
     if(match){
        return res.status(200).json({ message: "Signed in Successfully" }) 
                
     }
     else {
        return res.status(422).json({ error: "Invalid password" })
    }
      })
      .catch(err => console.log(err))
    } )
})
app.listen(port,()=>{
    console.log("server is running at" +port);
})
mongoose.connection.on("connected", () => {
    console.log("successfully connected to mongo")
})

mongoose.connection.on("error", () => {
    console.log("not connected to mongodb")
})


//post
const postSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        require: true
    },
    // likes: [{ type: ObjectId, ref: "USER" }],
    // comments: [{
    //     comment: { type: String },
    //     postedBy: { type: ObjectId, ref: "USER" }
    // }],
    postedBy: {
        type: ObjectId,
        ref: "USER"
    }
})
const POST= new mongoose.model("POST", postSchema);
app.post("/createPost",(req,res)=>{
   const { body, pic }=req.body;
    // console.log(pic);
    // console.log(body);

    if(!body||!pic){
        return res.status(422).json({ error: "pl add all fields" })
  
    }
    //res.user=userData;
    //console.log(req.user)
    const post = new POST({
      
        body,
        photo:pic,
       postedBy: req.user
    })
    post.save().then((result) => {
       // return res.json({ post: result })
    }).catch(err => console.log(err))
   
    res.json("ok")
   // console.log("hello")
})
