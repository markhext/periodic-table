var app = require('express').createServer();


app.use("/public", express.static(path.join(__dirname, 'public')));

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});


//app.get('/', function(req, res) {
//    res.send("Hello World");
//});

app.listen(process.env.PORT || 3000, function() {
    console.log("listening on 3000");
});