const express = require('express')
const books = require('../db/books.json')

const router = express.Router();


router.delete('/books/:id', (req, res, next) => {{
  const book = books.filter((book) => book.id !== req.params.id);
  if (!book) {
    res.status( 404 ).send( `User with id ${req.params.id} not found`  );
  }
  res.send('deleted success full')
}})

module.exports = router;