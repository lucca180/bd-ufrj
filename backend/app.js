var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var indexRouter = require('./routes/index');

var homeAnimes = require("./routes/getHomePageAnimes");
var searchAnimes = require("./routes/searchAnimeByName");

var getAnime = require("./routes/getAnimeByID");
var getByGenre = require("./routes/getAnimeByGenre");
var getGenre = require("./routes/getGenreByID");
var getScore = require("./routes/getScoreByID")
var getStudio = require("./routes/getStudioByID");

var getFromStudio = require("./routes/getFromStudio");
var genderCount = require("./routes/getAnimeGenderCount");
var getViewerRank = require("./routes/getAnimeViewerRank");
var getScoreRank = require("./routes/getAnimeScoreRank");
var getCountryRank = require("./routes/getAnimeCountryRank");
var getGenreRank = require("./routes/getGenreQtRank");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var mysql = require('mysql2/promise');
//Database connection
app.use(async (req, res, next) => {
	console.log("conectando")
	res.locals.connection = await mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : 'senha',
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

app.use("/getAnimeByID", getAnime);
app.use("/getAnimeByGenre", getByGenre);
app.use("/getGenreByID", getGenre);
app.use("/getScoreByID", getScore);
app.use("/getStudioByID", getStudio);

app.use("/getFromStudio", getFromStudio);
app.use("/getAnimeGenderCount", genderCount);
app.use("/getAnimeViewerRank", getViewerRank);
app.use("/getAnimeScoreRank", getScoreRank);
app.use("/getAnimeCountryRank", getCountryRank);
app.use("/getGenreQtRank", getGenreRank);

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
