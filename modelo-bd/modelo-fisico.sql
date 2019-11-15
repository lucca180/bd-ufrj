create table Usuario(
    usuarioID int,
    username varchar(64) not null,
    genero varchar(8),
    datanascimento date,
    primary key(usuarioID)
);

create table Localizacao(
    usuarioID int,
    endereco varchar(128),
    pais varchar(32),
    codigopais varchar(4),
    estado varchar(32),
    cidade varchar(32),
    primary key (usuarioID, endereco),
    constraint fk_localizacao_usuario_usuarioID foreign key (usuarioID) references Usuario
);

create table ListaAnime(
    usuarioID int,
    listaID int,
    dias_assistindo numeric(3,2),
    nota_media numeric(2,2),
    primary key (usuarioID, listaID),
    constraint fk_lista_anime_usuario_usuarioID foreign key (usuarioID) references Usuario
);