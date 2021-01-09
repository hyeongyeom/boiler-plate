
const express = require('express')
const app = express()
const port = 3000
const mongoose=require('mongoose');
const Schema=mongoose.Schema;


mongoose.connect('mongodb+srv://choi:abcd1234@boilerplate.h2duz.mongodb.net/<dbname>?retryWrites=true&w=majority', {
  useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then (()=> console.log('MongoDB connected'))
  .catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

