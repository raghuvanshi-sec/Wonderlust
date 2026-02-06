const express = require("express");
const router = express.Router();

//Users routes
//Index
router.get("/users", (req, res) => {
    res.send("GET for users");
});

//Show
router.get("/users/:id", (req, res) => {
    res.send("GET for user id");
});

//Post
router.post("/users", (req, res) => {
    res.send("POST for user");
});

//Patch
router.patch("/users/:id", (req, res) => {
    res.send("PATCH for user id");
});

//Delete
router.delete("/users/:id", (req, res) => {
    res.send("DELETE for user id");
});

module.exports = router;
