var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var fs = require('fs');
/*var routes = require('./routes/index');
var users = require('./routes/users');*/
var http = require('http');


var app = express();

//Mongodb
/*  var MongoClient = require('mongodb').MongoClient;
   // Connect to the db
   MongoClient.connect("mongodb://localhost:27017/QuotesDB", function (err, db) //New Database
    {
      var pricing = db.pricing('prices.js') //New Pricing:Prices
      collection.insert(records, function (err, doc) 
      {
         console.log(doc);
      });
   });
});*/

//Mongoose Connection
mongoose.connect("mongodb://localhost:27017/QuotesDB");
<<<<<<< HEAD
require('./models/prices');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function callback(){});
//view engine setup
//app.set('port', process.env.PORT || 3000)
=======
// require('./models/prices');

//view engine setup
app.set('port', process.env.PORT || 3000)
>>>>>>> 0e34165a43a7309e1d0398b8490c9fa2380fb801
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
<<<<<<< HEAD
//app.use(app.route);

//app.get('/', routes.index);
//app.get('/users', users.list);
=======
app.use(app.route);

// app.get('/', routes.index);
// app.get('/users', users.list);
>>>>>>> 0e34165a43a7309e1d0398b8490c9fa2380fb801

var LTstore = require('./controllers/LTstore.js');


<<<<<<< HEAD
app.get('/LTstore', LTstore.carts);
=======
app.get('/cart.jade', LTstore.carts);
>>>>>>> 0e34165a43a7309e1d0398b8490c9fa2380fb801

//app.use('/', routes);
//app.use('/users', users);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

<<<<<<< HEAD
/*http.createServer(app).listen(app.get('port'), function(){*/
/*  console.log("listening on port" + app.get('port'));*/
/*});*/
=======
http.createServer(app).listen(app.get('port'), function(){
  console.log("listening on port" + app.get('port'));
});
>>>>>>> 0e34165a43a7309e1d0398b8490c9fa2380fb801

module.exports = app;
