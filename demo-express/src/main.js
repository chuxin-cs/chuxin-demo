const express = require('express');
const app = express();

app.use("/",(req, res) =>{
    res.send("Hello World!");
})

app.listen(3000, () => {
    console.log("Server is running on port http://127.0.0.1:3000");
})