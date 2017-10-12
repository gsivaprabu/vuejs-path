const express = require("express");
const app = express();

app.get("*", (req, res) => {
    res.write("Hey There !!");
    res.end();
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});