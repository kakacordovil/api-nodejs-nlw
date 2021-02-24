import 'reflect-metadata';
import express from 'express';
import './database';

const app = express();



app.get("/" , (request, response) => {
    return response.json({ message: "Hello world nlw"});
});

app.post("/" , (request, response) => {
    return response.json({ message: "data saved"});
});

app.listen(3333, ()=> console.log("Server is running"));