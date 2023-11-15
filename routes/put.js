const express = require('express')
const books = require('../db/books.json')

const router = express.Router();


router.put('/books/:id', (req, res, next) => {{
    const book = books.find((book) => book.id === req.params.id);
    if (!book) {
        res.status( 404 ).send( `User with id ${req.params.id} was not found`  );
    }
      res.send(book)
}})

module.exports = router;