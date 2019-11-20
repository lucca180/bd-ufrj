/*
    CRITÉRIO 2: consulta com 2 relações

    O QUE FAZ: Dado o valor de N, retorna os N animes com maior score

    EXEMPLO: ENTRADA: animeID
            SAÍDA: AVG(nota)

*/

var express = require("express");
var router = express.Router();

router.get("/:animeID", async (req, res, next) => {
  	const [rows, fields] = await res.locals.connection.execute("SELECT AVG(nota) from AnimeListaAnime natural join Anime where animeID = " + req.params.animeID +" and nota >= 1;");
    res.send(JSON.stringify(rows));
});

module.exports = router;
