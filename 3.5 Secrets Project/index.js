import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import e from "express";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

 app.use(bodyParser.urlencoded({ extended: true }));

 app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
    });

app.post("/check", (req, res) => {
    let password = req.body.password;
if (password === "ILoveProgramming") {
    res.sendFile(__dirname + "/public/secret.html");
}else {
    res.redirect("/");
}
    } );

     