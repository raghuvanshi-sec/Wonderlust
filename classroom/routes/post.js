const express = require("express");
const router = express.Router();

//Posts routes
//Index
router.get("/posts", (req, res) => {
    res.send("GET for posts");
});

//Show
router.get("/posts/:id", (req, res) => {
    res.send("GET for post id");
});

//Post
router.post("/posts", (req, res) => {
    res.send("POST for post");
});

//Patch
router.patch("/posts/:id", (req, res) => {
    res.send("PATCH for post id");
});

//Delete
router.delete("/posts/:id", (req, res) => {
    res.send("DELETE for post id");
});

module.exports = router;
