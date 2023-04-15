const express = require('express');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors');
const authRoute = require('./routes/AuthRoute');
const userRoute = require('./routes/UserRoute');

const app = express()//creates an express app
dotenv.config();
app.use(express.json());
const PORT = 3001;

//connect database
mongoose.set('strictQuery', true),
  mongoose.connect(process.env.MONGO_URL)
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

//server response
app.get('/', (req, res) => {
    res.send('Hello from server!')
});

//server runing and port
app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));

//user auth
app.use("/auth", authRoute);

//user routes
app.use("/users", userRoute);
