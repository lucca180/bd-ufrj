/*
    CRITÉRIO 1: Consulta envolvendo apenas as operações de seleção e projeção;

    O QUE FAZ: Dado o ID do anime, retorna tudo do anime.

    EXEMPLO: ENTRADA: animeID
            SAÍDA: animeID, imagem, nome_ingles, nome_japones (...)
*/

var express = require("express");
var router = express.Router();

router.get("/:animeID", async (req, res, next) => {
  	const [rows, fields] = await res.locals.connection.execute("SELECT * from Anime WHERE animeID = " + req.params.animeID +";");
    res.send(JSON.stringify(rows));
});

module.exports = router;
