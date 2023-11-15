const express = require('express')
const path = require('path')
const books = require('../db/books.json')

const router = express.Router();

router.get('/books', (req, res) => {{
    res.sendFile(path.join(__dirname, '../db', 'books.json'));
}})

router.get('/books/:id', (req, res) => {{
    const book = books.find((book) => book.id === req.params.id);
    if (!book) {
         res.status(404).send('data not found');
    }
    res.send('data found');
}})

module.exports = router;