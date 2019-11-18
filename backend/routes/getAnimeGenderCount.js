/*
    CRITÉRIOS 3 & 5: consulta com 3 relações & função de agregação

    O QUE FAZ: Dado o ID do anime, retorna a quantidade por gênero do anime

    EXEMPLO: ENTRADA: animeID, N (opcional)
            SAÍDA: Usuario.genero, Count
*/

var express = require("express");
var router = express.Router();

router.get("/:animeID/", async (req, res, next) => {
  	const [rows, fields] = await res.locals.connection.execute("SELECT genero as gender, count(genero) as genderCount from Usuario natural join ListaAnime natural join (select * from AnimeListaAnime where animeID = "+ req.params.animeID +") A group by genero, A.animeID;");
    res.send(JSON.stringify(rows));
});


module.exports = router;
