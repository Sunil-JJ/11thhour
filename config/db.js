const mongoose= require('mongoose')
require('dotenv').config()
const connection= async()=>{
    await mongoose.connect(process.env.MONGO_URL)
}
    

module.exports={connection}