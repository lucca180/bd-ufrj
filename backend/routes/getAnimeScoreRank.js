/*
    CRITÉRIOS 2 & 5: consulta com 2 relações & função de agregação

    O QUE FAZ: Dado o valor de N, retorna os N animes com maior score

    EXEMPLO: ENTRADA: animeID, N (opcional)
            SAÍDA: Anime.*, AVG(nota)

    Observação: se você rodar duas vezes, ele vai permutar a ordem das saídas com a mesma nota.
*/

var express = require("express");
var router = express.Router();

router.get("/", async (req, res, next) => {
  	const [rows, fields] = await res.locals.connection.execute("SELECT Anime.*, AVG(nota) as average from AnimeListaAnime natural join Anime where nota >= 1 group by animeID order by average desc LIMIT 14;");
    res.send(JSON.stringify(rows));
});

router.get("/:limit", async (req, res, next) => {
  	const [rows, fields] = await res.locals.connection.execute("SELECT Anime.*, AVG(nota) as average from AnimeListaAnime natural join Anime where nota >= 1 group by animeID order by average desc LIMIT " + req.params.limit + ";");
    res.send(JSON.stringify(rows));
});

module.exports = router;
