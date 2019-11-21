/*
    CRITÉRIOS 2.2 & 6: consulta com 2 relações com Junção Externa & Subconsulta aninhada

    O QUE FAZ: Dado o animeID, retorna N animes produzidos pelo mesmo estudio que o produziu.

    EXEMPLO: ENTRADA: animeID, N (opcional)
            SAÍDA: nome_estudio, Anime.*

    Observação: se você rodar duas vezes, ele vai permutar a ordem das saídas com a mesma nota.
*/

var express = require("express");
var router = express.Router();

router.get("/:animeID", async (req, res, next) => {
  	const [rows, fields] = await res.locals.connection.execute("select nome_estudio, Anime.* from AnimeEstudio left outer join Anime on AnimeEstudio.animeID = Anime.animeID where nome_estudio = some (select nome_estudio from AnimeEstudio where animeID = " + req.params.animeID + ") AND Anime.animeID != " + req.params.animeID + " LIMIT 14;");
    res.locals.connection.end();
    res.send(JSON.stringify(rows));
});

router.get("/:animeID/:limit", async (req, res, next) => {
  	const [rows, fields] = await res.locals.connection.execute("select nome_estudio, Anime.* from AnimeEstudio left outer join Anime on AnimeEstudio.animeID = Anime.animeID where nome_estudio = some (select nome_estudio from AnimeEstudio where animeID = " + req.params.animeID + ") AND Anime.animeID != " + req.params.animeID + " LIMIT " + req.params.limit + ";");
    res.locals.connection.end();
    res.send(JSON.stringify(rows));
});

module.exports = router;
