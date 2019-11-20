/*
    CRITÉRIOS 5: função de agregação

    O QUE FAZ: Dado o valor de N, retorna os N gêneros com mais animes.

    EXEMPLO: ENTRADA: N (opcional)
            SAÍDA: nome_genero, nAnimes (Número de Animes por Gênero)

    Observação: LIMIT 43 é o máximo. Daqui pra frente não faz mais diferença.
*/

var express = require("express");
var router = express.Router();

router.get("/", async (req, res, next) => {
  	const [rows, fields] = await res.locals.connection.execute("select nome_genero, count(*) as nAnimes from AnimeGenero group by nome_genero order by nAnimes desc LIMIT 14;");
    res.send(JSON.stringify(rows));
});

router.get("/:limit", async (req, res, next) => {
  	const [rows, fields] = await res.locals.connection.execute("select nome_genero, count(*) as nAnimes from AnimeGenero group by nome_genero order by nAnimes desc LIMIT " + req.params.limit + ";");
    res.send(JSON.stringify(rows));
});

module.exports = router;
