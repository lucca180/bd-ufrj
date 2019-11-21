/*
    CRITÉRIO 1: Consulta envolvendo apenas as operações de seleção e projeção;

    O QUE FAZ: Dado o ID do anime, retorna os nomes os gêneros do anime.

    EXEMPLO: ENTRADA: animeID
            SAÍDA: nome_genero (pode ser mais de um)
*/

var express = require("express");
var router = express.Router();

router.get("/:animeID", async (req, res, next) => {
  	const [rows, fields] = await res.locals.connection.execute("SELECT nome_genero FROM AnimeGenero WHERE animeID="+ req.params.animeID +";");
    res.locals.connection.end();
    res.send(JSON.stringify(rows));
});

module.exports = router;
