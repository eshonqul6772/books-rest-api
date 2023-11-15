const express = require("express");
const db = require("../db/books.json");

const router = express.Router();

router.post("/books", (req, res) => {

  if(!req.body.title && !req.body.autor){
    res.status(404).send("malumoot to'g'ri kiriting")
  }

  const books = {
    id:db.length+1,
    title: req.body.title,
    autor: req.body.autor
  };
  db.push(books);
  console.log(db);
 
   res.status(201).send("User has been added successfully");
});

module.exports = router;
