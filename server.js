const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");

connectDB();

app.use(express.json());

app.use("/peaple", require("./routes/person"));

const port = process.env.PORT || 3000;
app.listen(port, (err) => {
  err
    ? console.log("Error", err)
    : console.log(`the server is running on port ${port} ...`);
});
