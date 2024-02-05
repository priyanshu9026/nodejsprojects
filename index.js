const express = require("express");
const app = express();

app.get("/date", (request, response) =>{
    let date = new Date();
    response.send(`Todays date is ${date}`);
});

app.listen(30000);