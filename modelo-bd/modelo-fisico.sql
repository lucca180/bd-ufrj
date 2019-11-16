charset utf8

create table Usuario(
    usuarioID int,
    username varchar(64) not null,
    genero varchar(16),
    datanascimento date,
    primary key(usuarioID)
);

create table Localizacao(
    usuarioID int,
    endereco varchar(64),
    pais varchar(128),
    codigo_pais varchar(2),
    estado varchar(256),
    cidade varchar(128),
    primary key (usuarioID, endereco),
    constraint fk_localizacao_usuario_usuarioID foreign key (usuarioID) references Usuario(usuarioID)
        on delete cascade
        on update cascade
);

create table ListaAnime(
    usuarioID int,
    dias_assistindo float,
    nota_media numeric(4,2),
    primary key (usuarioID),
    constraint fk_lista_anime_usuario_usuarioID foreign key (usuarioID) references Usuario(usuarioID)
        on delete cascade
        on update cascade
);

create table Anime(
    animeID int,
    imagem varchar(64),
    nome_ingles varchar(128),
    nome_japones varchar(128) not null,
    duracao_ep numeric(3,0),
    ano_lancamento numeric(4,0),
    numero_episodios numeric(4,0),
    no_ar boolean,
    origem varchar(16),
    classificacao_etaria varchar(32),
    primary key (animeID)
);

create table Estudio(
    nome_estudio varchar(64),
    primary key (nome_estudio)
);

create table Genero(
    nome_genero varchar(16),
    primary key (nome_genero)
);

create table AnimeEstudio(
    animeID int,
    nome_estudio varchar(64),
    primary key (animeID, nome_estudio),
    constraint fk_anime_estudio_animeID foreign key (animeID) references Anime(animeID)
        on delete cascade
        on update cascade,
    constraint fk_anime_estudio_nome_estudio foreign key (nome_estudio) references Estudio(nome_estudio)
        on delete cascade
        on update cascade
);

create table AnimeGenero(
    animeID int,
    nome_genero varchar(16),
    primary key (animeID, nome_genero),
    constraint fk_anime_genero_animeID foreign key (animeID) references Anime(animeID)
        on delete cascade
        on update cascade,
    constraint fk_anime_genero_nome_genero foreign key (nome_genero) references Genero(nome_genero)
        on delete cascade
        on update cascade
);

create table AnimeListaAnime(
    animeID int,
    usuarioID int,
    nota numeric(2,0),
    anime_status numeric(1,0),
    /*
    anime_status:
        1: watching
        2: completed
        3: on hold
        4: dropped
        6: plan to watch
    */
    primary key (animeID, usuarioID),
    constraint fk_anime_lista_anime_animeID foreign key (animeID) references Anime(animeID)
        on delete cascade
        on update cascade,
    constraint fk_anime_lista_anime_usuarioID_listaID foreign key (usuarioID) references ListaAnime(usuarioID)
        on delete cascade
        on update cascade
);
