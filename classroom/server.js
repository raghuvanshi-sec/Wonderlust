const express = require("express");
const app = express();
const port = 3000;
const users = require("./routes/user.js");
const posts = require("./routes/post.js");

app.get("/", (req, res) => {
    res.send("Hi, welcome to Wonderlust!");
});

app.use(users);
app.use(posts);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});