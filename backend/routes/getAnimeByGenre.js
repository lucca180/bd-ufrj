/*
    CRITÉRIOS 1: Consulta envolvendo apenas as operações de seleção e projeção.

    O QUE FAZ: Dado nome_genero e o valor de N, retorna os N animes com o gênero especificado

    EXEMPLO: ENTRADA: nome_genero, N (opcional)
            SAÍDA: Anime.*
*/

var express = require("express");
var router = express.Router();

router.get("/:nome_genero", async (req, res, next) => {
  	const [rows, fields] = await res.locals.connection.execute("select Anime.* from AnimeGenero natural join Anime where nome_genero = \""+ req.params.nome_genero +"\" LIMIT 14;");
    res.send(JSON.stringify(rows));
});

router.get("/:nome_genero/:limit", async (req, res, next) => {
  	const [rows, fields] = await res.locals.connection.execute("select Anime.* from AnimeGenero natural join Anime where nome_genero = \""+ req.params.nome_genero +"\" LIMIT " + req.params.limit + ";");
    res.send(JSON.stringify(rows));
});

module.exports = router;
