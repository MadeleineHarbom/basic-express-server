const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cors());

app.get("/", cors(), async(req, res)  => {
    res.send("Hello world ")
})


app.listen(port, () => {
   
    console.log(`listening at http://localhost:${port}`);

});