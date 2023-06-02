const express = require('express');
const { dbConn } = require('./config/db');
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');
const cors = require('cors');
// const{Product} = require("./models/Product");
// const fs = require('fs');
const app = express();
const port = 1111;

app.use(express.json());
app.use(cors());

app.use('/product',productRoutes);
app.use('/user',userRoutes);

dbConn();
app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
})