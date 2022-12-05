const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models");
const userinfo = require('./controller/userinfo.controller.js')



const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => console.log(`This app listening on port ${port}!`));


db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });


app.get("/", (req, res) => {
    res.json({ message: "Welcome to my application." });
});


app.post("/api/userinfo", userinfo.create);
app.get("/api/userinfo", userinfo.findAll);
app.get("/api/userinfo/:id", userinfo.findOne);
app.put("/api/userinfo/:id", userinfo.update);
app.delete("/api/userinfo/:id", userinfo.delete);
app.delete("/api/userinfo", userinfo.deleteAll);
app.get("/api/userinfo/published", userinfo.findAllPublished);





