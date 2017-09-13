var express = require('express'),
bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/client'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(){
res.sendFile(__dirname + 'index.html');
});

var port = process.env.PORT || '8080';
app.listen(port, function(){
console.log('listening on ' + port + '...')
})
