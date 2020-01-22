const app = require('express')()

app.get('/', (req, res) => {
  //setTimeout(function() {
    res.send("Hello from Kabanero!");
  //}, 3000);
  
});
 
module.exports.app = app;
