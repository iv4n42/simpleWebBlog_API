const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();



async function connectPosts() {
    await mongoose.connect('mongodb://127.0.0.1:27017/posts');
  
  }
connectPosts().then(() => console.log('postconnect sirvio')).catch(e => console.log(e));
const postSchema =  new mongoose.Schema({
    user : String,
    title : String,
    description : String,
    text : String,
});
const Post = mongoose.model('Post',postSchema);
let posts = []


app.use(cors(),express.urlencoded({extended : true}),express.json());


app.get('/',(req,res)=>{
    res.send('empezando papa')
})
app.get('/posts',(req,res)=>{
    Post.find({}).then(data => {
        posts = data
        res.send(posts)
    })
    
})
app.post('/posts',(req,res) => {
    const newPost = new Post(req.body)
    newPost.save().then(()=> res.send("Se hizo tu post"))
})
app.listen(3000,() => {
    console.log('hello world')
})