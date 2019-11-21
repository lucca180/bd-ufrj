/*
    O QUE FAZ: (searchbar query), essa query retorna
              uma lista de N animes que contém a string dada pela busca.
              O valor de N é dado por :limit (segundo parametro, opcional. Default = 14)

    EXEMPLO: ENTRADA: naruto
            SAÍDA: Anime.* (dos animes que têm naruto no nome)
*/

var express = require("express");
var router = express.Router();

router.get("/:searchName/", async (req, res, next) => {
  	const [rows, fields] = await res.locals.connection.execute("SELECT * FROM Anime WHERE nome_ingles OR nome_japones LIKE '%"+ req.params.searchName +"%' LIMIT 14;");
    res.locals.connection.end();
    res.send(JSON.stringify(rows));
});

router.get("/:searchName/:limit", async (req, res, next) => {
  	const [rows, fields] = await res.locals.connection.execute("SELECT * FROM Anime WHERE nome_ingles OR nome_japones LIKE '%"+ req.params.searchName +"%' LIMIT "+ req.params.limit + ";");
    res.locals.connection.end();
    res.send(JSON.stringify(rows));
});

module.exports = router;
