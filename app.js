const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());


const transactionsController = require("./controllers/transactionsController.js");

app.get("/", (req, res ) => {
    res.send("Welcome to the budgeting app !@#!@#!@")
});


app.use("/transactions", transactionsController)


app.get("*", (req, res) => {
    res.status(404).json({error: "Not found"})
})



module.exports = app;