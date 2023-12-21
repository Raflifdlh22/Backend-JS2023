const express = require("express");

const Router = require("./routes/api");
// membuat object app dari class express
const app = express();
// menggunakan midleware
app.use(express.json());

app.use(Router);

// mendenifisikan route
app.listen(3000, () => {
  console.log(`server running at http://127.0.0.1:3000`);
});
