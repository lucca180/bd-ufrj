/*
    CRITÉRIO 1: Consulta envolvendo apenas as operações de seleção e projeção;

    O QUE FAZ: Dado o ID do anime, retorna os nomes dos estúdios que o produziram.

    EXEMPLO: ENTRADA: animeID
            SAÍDA: nome_estudio (pode ser mais de um)
*/

var express = require("express");
var router = express.Router();

router.get("/:animeID", async (req, res, next) => {
  	const [rows, fields] = await res.locals.connection.execute("select nome_estudio from AnimeEstudio where animeID = "+ req.params.animeID +";");
    res.locals.connection.end();
    res.send(JSON.stringify(rows));
});

module.exports = router;
