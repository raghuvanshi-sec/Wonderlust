const express = require("express");
const app = express();
const port = 3000;
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");




app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));



const sessionOptions = {
    secret: "mysupersecretstring",
    resave: false,
    saveUninitialized: true
};

app.use(
    session(sessionOptions)
);

app.use(flash());

// app.use("/users", users);
// app.use("/posts", posts);

app.get("/register", (req, res) => {
    let { name = "anonymous" } = req.query;
    req.session.name = name;
    req.flash("success", "You are now registered");
    req.flash("error", "You are not registered");
    res.send(name);
});

app.use((req, res, next) => {
    res.locals.successmessages = req.flash("success");
    res.locals.errormessages = req.flash("error");
    next();
});

app.get("/hello", (req, res) => {
    res.render("page.ejs", { name: req.session.name });
});

app.get("/reqcount", (req, res) => {
    if (req.session.count){
        req.session.count++;
    }else {
        req.session.count =1;
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});