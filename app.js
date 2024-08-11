import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/home", (req, res) => {
    res.render("home.ejs");
});

app.get("/", (req, res) => {
    res.redirect("home");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});