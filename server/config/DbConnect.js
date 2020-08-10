const mongoose = require('mongoose')
const express =require('express')



const connectDb =()=> {mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }).then(() => console.log('DB Connected!'))
}
module.exports = connectDb