import express from "express";

const PORT = 8000;

const app = express();

app.listen(PORT, (req, res)=>{
    console.log(`Server is up and running on port: ${PORT}`);
});

