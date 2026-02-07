const express = require('express');
require("dotenv").config()
const app = express();
const products = require("./routes/productRoutes")



//middelware
app.use(express.json());


app.get('/',(req,res)=>{
    res.send("hello world ");
});

app.use('/api',products);





const port = process.env.PORT;

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})