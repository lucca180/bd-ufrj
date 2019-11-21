/*
    CRITÉRIOS 3 & 5: consulta com 3 relações & função de agregação

    O QUE FAZ: Dado o ID do anime, retorna a porcentagem de gênero do anime (retornava a quantidade por gênero do anime)

    EXEMPLO: ENTRADA: animeID
            SAÍDA: Usuario.genero(traduzido), genderCount

    PARA O RELATÓRIO:
    
    Consideramos usar:
    
    "SELECT (CASE WHEN genero = 'Male' THEN 'Masculino' WHEN genero = 'Female' THEN 'Feminino' WHEN genero = 'Non-Binary' THEN 'Não-Binário' ELSE 'Não Definido' END) as gender, count(genero)*100/(SELECT count(genero) from Usuario natural join ListaAnime natural join (select * from AnimeListaAnime where animeID = [ANIMEID]) B) as genderCount from Usuario natural join ListaAnime natural join (select * from AnimeListaAnime where animeID = [ANIMEID]) A group by genero, A.animeID;"
    
    Mas foi melhor contar o total de espectadores na própria busca que numa subconsulta, que envolveu aprender a usar a expressão OVER().
    O que ocorreu foi que OVER() está presente em apenas versões mais recentes do MySQL. Com isso, resolvemos a porcentagem no javascript. Essa era a consulta com
    OVER():

    "SELECT (CASE WHEN genero = 'Male' THEN 'Masculino' WHEN genero = 'Female' THEN 'Feminino' WHEN genero = 'Non-Binary' THEN 'Não-Binário' ELSE 'Não Definido' END) as gender, count(genero)*100/(sum(count(genero)) over()) as genderCount from Usuario natural join ListaAnime natural join (select * from AnimeListaAnime where animeID = "+ req.params.animeID +") A group by genero, A.animeID;"
    

    Ainda fizemos o uso de um CASE WHEN --- THEN --- ELSE --- END, para traduzir alguns gêneros esperados, setando um default para os não esperados.
*/

var express = require("express");
var router = express.Router();

router.get("/:animeID/", async (req, res, next) => {
  	const [rows, fields] = await res.locals.connection.execute("SELECT (CASE WHEN genero = 'Male' THEN 'Masculino' WHEN genero = 'Female' THEN 'Feminino' WHEN genero = 'Non-Binary' THEN 'Não-Binário' ELSE 'Não Definido' END) as gender, count(genero) as genderCount from Usuario natural join ListaAnime natural join (select * from AnimeListaAnime where animeID = "+ req.params.animeID +") A group by genero, A.animeID;");
    res.locals.connection.end();
    res.send(JSON.stringify(rows));
});


module.exports = router;
