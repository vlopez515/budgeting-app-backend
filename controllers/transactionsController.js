const express = require("express");
const transactions = express.Router();

const transactionsData = require("../models/transaction.js");

transactions.get("/", (req, res) => {
    res.json(transactionsData);
});

transactions.post("/", (req, res) => {
    transactionsData.push(req.body);
    res.json(transactionsData[transactionsData.length - 1]);
});

transactions.get("/:id", (req, res) => {
    const { id } = req.params;
    if (transactionsData[id]) {
        res.json(transactionsData[id])
    } else {
        res.status(404).redirect('/error')
    } 
})

transactions.delete('/:id', (req, res) => {
    const { id } = req.params
    transactionsData.splice(id,1)
    res.send(transactionsData)
});

transactions.put('/:id', (req, res) => {
    const { id } = req.params
    console.log(id)
    transactionsData[id] = req.body
    res.send(transactionsData)
});


module.exports = transactions