/*
    CRITÉRIOS 3 & 5: consulta com 3 relações & função de agregação

    O QUE FAZ: Dado o valor de N, retorna os N animes com mais viewers

    EXEMPLO: ENTRADA: animeID, N (opcional)
            SAÍDA: Anime.*, count(viewers)
*/

var express = require("express");
var router = express.Router();

router.get("/", async (req, res, next) => {
  	const [rows, fields] = await res.locals.connection.execute("SELECT Anime.*, count(usuarioID) as viewers from Anime natural join AnimeListaAnime natural Join ListaAnime group by animeID ORDER BY viewers DESC LIMIT 14;");
    res.locals.connection.end();
    res.send(JSON.stringify(rows));
});

router.get("/:limit", async (req, res, next) => {
  	const [rows, fields] = await res.locals.connection.execute("SELECT Anime.*, count(usuarioID) as viewers from Anime natural join AnimeListaAnime natural Join ListaAnime group by animeID ORDER BY viewers DESC LIMIT " + req.params.limit + ";");
    res.locals.connection.end();
    res.send(JSON.stringify(rows));
});

module.exports = router;
