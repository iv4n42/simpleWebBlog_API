const express = require('express')
const cors = require('cors')
const app = express()

let posts = [
    {user : 'Ivan' , title : 'azuca' , description  : 'text1'},
    {user : 'Pedro' , title : 'merengue' , description  : 'text2'},
    {user : 'Marco' , title : 'huevo' , description  : 'text3'}
]

app.use(cors())

app.get('/',(req,res)=>{
    res.send('empezando papa')
})
app.get('/posts',(req,res)=>{
    res.send(posts)
})
app.listen(3000,() => {
    console.log('hello world')
})