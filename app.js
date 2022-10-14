const express = require("express");
const bodyParser = require("body-parser");
const mongoose= require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect('mongodb+srv://bharathraj1614:mugi2002@cluster0.br3ac.mongodb.net/myOrder');

const ItemsSchema={
  name: String,
  teamNo: String,
  color: String,
  quantity: String
}


const item= mongoose.model("item",ItemsSchema);


app.get("/", function(req, res) {

  res.render('index')

});  

app.post("/", function(req, res){

  const newItem = new item({
    name: req.body.name,
    teamNo: req.body.teamNo,
    color: req.body.color,
    quantity: req.body.quantity
  });
  newItem.save();
  res.redirect('/')

});


app.listen(3000,function() {
  console.log("Server started successfully");
});