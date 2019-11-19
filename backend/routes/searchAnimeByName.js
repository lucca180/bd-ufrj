/*
    O QUE FAZ: (searchbar query), essa query retorna
              uma lista de N animes que contém a string dada pela busca.
              O valor de N é dado por :limit (segundo parametro, opcional. Default = 14)

    EXEMPLO: ENTRADA: naruto
            SAÍDA: tudo (dos animes que têm naruto no nome)
*/

var express = require("express");
var router = express.Router();

router.get("/:searchName/", async (req, res, next) => {
  	const [rows, fields] = await res.locals.connection.execute("SELECT * FROM Anime WHERE nome_ingles LIKE '%"+ req.params.searchName +"%' LIMIT 14;");
    //console.log(req.params.searchName);
    res.send(JSON.stringify(rows));
});

router.get("/:searchName/:limit", async (req, res, next) => {
  	const [rows, fields] = await res.locals.connection.execute("SELECT * FROM Anime WHERE nome_ingles LIKE '%"+ req.params.searchName +"%' LIMIT "+ req.params.limit + ";");
    //console.log(req.params.searchName);
    res.send(JSON.stringify(rows));
});

module.exports = router;
