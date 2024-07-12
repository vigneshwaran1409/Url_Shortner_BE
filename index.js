const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config()

const Port = process.env.PORT;
const DatabaseAPI = process.env.DATABASE_URL || 'mongodb+srv://fullstackvicky:958594@cluster0.hdnma3s.mongodb.net/food-del'

mongoose.set('strictQuery', false)

async function Main(){
    await mongoose.connect(DatabaseAPI)
    console.log('connected to database')
    app.listen(Port , ()=> console.log('Connected to port'))
}

Main();
