var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

var indexRouter = require('./routes/index');
var homeAnimes = require("./routes/getHomePageAnimes");
var searchAnimes = require("./routes/searchAnimeByName");
var genderCount = require("./routes/getAnimeGenderCount");
var getAnime = require("./routes/getAnimeByID");
var getCountryRank = require("./routes/getAnimeCountryRank");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var mysql = require('mysql2/promise');
//Database connection
app.use(async (req, res, next) => {
	res.locals.connection = await mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : '',
		database : 'bd_ufrj'
	});
	res.locals.connection.connect();
	next();
});


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use("/homeAnimes", homeAnimes);
app.use("/searchAnimeByName", searchAnimes);
app.use("/getAnimeGenderCount", genderCount);
app.use("/getAnimeByID", getAnime);
app.use("/getAnimeCountryRank", getCountryRank);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
