/*
    CRITÉRIO 1: Consulta envolvendo apenas as operações de seleção e projeção;

    O QUE FAZ: Dado o ID do anime, retorna tudo de 14 animes.

    EXEMPLO: ENTRADA: animeID
            SAÍDA: Usuario.genero, Count
*/

var express = require("express");
var router = express.Router();

router.get("/", async (req, res, next) => {
  	const [rows, fields] = await res.locals.connection.execute('SELECT * from Anime ORDER BY RAND() LIMIT 14;');
    res.send(JSON.stringify(rows));
});

module.exports = router;
