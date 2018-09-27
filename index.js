const express = require('express');
const PORT = process.env.PORT || 9000;
const {resolve} = require('path');//resolve creates an absolute path to a location. resolve will work
const cors = require('cors');

const app = express();

app.use(cors());//this is for development only, not made public
app.use(express.static(resolve(__dirname,'client','dist'))); //any request to the dist folder send the file back
app.use(express.json());

app.post('/api/login',(req,res)=>{
    console.log('POST DATA:',req.body);

    res.send({
        success: true,
        message: 'You are now logged in. Here is your user data',
        receivedData: req.body
    })
});

app.get('/api/test',(req,res)=>{
    res.send({
        success: true,
        message: 'The API is working',
        date: new Date().toDateString()
    })
});

app.get('/api/user',(req,res)=>{
    res.send({
        name: 'Helen Keller',
        age: 56,
        email: 'hellenhaerere@gmail.com'
    })
})

app.get('*',(req,res)=>{
    res.sendFile(resolve(__dirname, 'client', 'dist', 'index.html'));//resolve from these directories and files
})

app.listen(PORT,()=>{
    console.log('Server Running on Port:' + PORT);
});