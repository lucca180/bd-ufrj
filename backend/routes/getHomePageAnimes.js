var express = require("express");
var router = express.Router();

router.get("/", async (req, res, next) => {
  	const [rows, fields] = await res.locals.connection.execute('SELECT * from Anime LIMIT 14;');
    res.send(JSON.stringify(rows));
});

module.exports = router;