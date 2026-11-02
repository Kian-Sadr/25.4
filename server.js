const express = require("express");
const app = express();

app.use(express.static("public"));

function statement(req){
  let output = '<h1>Hello, ';
  output += req.query.name;
  output +="!</h1>";
  output += "<p> You are ";
  output += req.query.age;
  output += " years old.</p>";
  return output;
}

app.get("/hello", function(req, res){
  res.send(statement(req));
});

app.listen(process.env.PORT || 3000);
