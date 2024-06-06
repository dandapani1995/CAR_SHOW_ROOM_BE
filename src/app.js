const express = require ('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('../src/config/db');
const Routes = require('../src/routes');
var app = express();
const config = require('../src/config/config');

app.use(bodyParser.json())
// Connect to database
connectDB();
// Use user routes
app.use('/api', Routes);

app.listen(config.PORT,()=>{
    console.log("Run the server on",config.PORT);
});