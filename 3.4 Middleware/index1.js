import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("tiny"));
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});



app.get("/", (req, res) => {
    res.send("Hello World!");
    });

app.post("/submit", (req, res) => {
    console.log(req.body);
    res.send(req.body);
    });