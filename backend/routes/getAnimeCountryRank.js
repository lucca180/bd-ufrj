/*
    CRITÉRIOS 3 & 5: consulta com 3 relações & função de agregação

    O QUE FAZ: Dado o ID do anime, retorna a quantidade de pessoas que o assistem por país.

    EXEMPLO: ENTRADA: animeID, N (opcional)
            SAÍDA: Pais, Count
*/

var express = require("express");
var router = express.Router();

router.get("/:animeID/", async (req, res, next) => {
  	const [rows, fields] = await res.locals.connection.execute("SELECT Pais, count(animeID) as viewerCount from Usuario natural join Localizacao natural join ListaAnime natural join (select * from AnimeListaAnime where animeID = "+ req.params.animeID +") A group by Pais order by viewerCount desc LIMIT 14;");
    res.send(JSON.stringify(rows));
});

router.get("/:animeID/:limit", async (req, res, next) => {
  	const [rows, fields] = await res.locals.connection.execute("SELECT Pais, count(animeID) as viewerCount from Usuario natural join Localizacao natural join ListaAnime natural join (select * from AnimeListaAnime where animeID = "+ req.params.animeID +") A group by Pais order by viewerCount desc LIMIT "+ req.params.limit +";");
    res.send(JSON.stringify(rows));
});

module.exports = router;
