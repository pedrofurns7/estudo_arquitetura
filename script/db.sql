create extension if not exists "uuid-ossp"

create table usuarios (
    id uuid primary key,
    nome varchar (255) not null,
    email varchar (255) not null,
    senha varchar (255) not null
);


create table produtos (
    id uuid PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL
)
