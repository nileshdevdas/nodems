var express = require("express");
var cors =  require("cors");

var app = express();
app.use(cors());

app.get("/version", function(request, response){
    var user = {}; 
    user.username = "nilesh"; 
    user.password = "nilesh"; 
    user.role = "Admin";
    user.location = "Pune";
    response.end(JSON.stringify(user));
});

app.listen(5000);