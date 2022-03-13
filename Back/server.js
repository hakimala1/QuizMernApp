const express = require('express')
const connectDb = require('./config/connectDb')
const authRout = require('./routes/authRoute')
const profileRout=require('./routes/profileRoute')
const quizRout = require('./routes/quizRoute')
const path = require('path');

const app = express()
require('dotenv').config()

connectDb()

app.use(express.json())
app.use('/api/auth',authRout)
app.use('/api/profile',profileRout)
app.use('/api/quiz',quizRout)

if(process.env.NODE_ENV==='production'){
    app.use(express.static(path.resolve(__dirname, '../client/build')))
    app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
  });

  
}
else {
  app.get('/', (req, res) => res.send('Please set to production'))
}


app.listen(process.env.PORT || 5000 , ()=>console.log(`port is running : ${process.env.PORT}`))