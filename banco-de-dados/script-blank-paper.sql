create database blank_paper;
use blank_paper;

CREATE TABLE usuario(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    login VARCHAR(70) unique key,
    senha VARCHAR(45)
);

CREATE TABLE comissoes(
    idComissoes INT AUTO_INCREMENT,
    valueCheck VARCHAR(6),
    foreign key (valueCheck) references tipoComissoes(nomeTipo),
    textarea_conteudo VARCHAR(140),
    fkUsuario VARCHAR(70),
    foreign key (fkUsuario) references usuario(login),
    primary key (idComissoes, valueCheck, fkUsuario)
) auto_increment = 1000;

create table tipoComissoes(
id_tipoComissoes int primary key auto_increment,
nomeTipo VARCHAR(6) unique key,
valor int
) auto_increment = 2000;

insert into tipoComissoes value (null, 'basic', 5);
insert into tipoComissoes value (null, 'medium', 15);
insert into tipoComissoes value (null, 'plus', 25);

update usuario set login = 'Pedrin2002@gmail.com' where id = 24;
select * from usuario;
select * from comissoes;
select * from tipoComissoes;

select id, nome, login, idComissoes as 'Número do Pedido', valueCheck as 'Nome do Pacote', textarea_conteudo as 'Descrição', valor from usuario 
join comissoes on usuario.login = comissoes.fkUsuario
join tipoComissoes on nomeTipo = valueCheck;

select min(valueCheck) as 'Pacote com menos requisição', max(valueCheck) as 'Pacote com mais requisição' from comissoes;

select count(valueCheck) as 'Quantidade de pacotes' from comissoes where valueCheck = 'basic';
select count(valueCheck) as 'Quantidade de pacotes' from comissoes where valueCheck = 'medium';
select count(valueCheck) as 'Quantidade de pacotes' from comissoes where valueCheck = 'plus';

select distinct(select count(*) from comissoes where valueCheck = 'basic') as basic,
				(select count(*) from comissoes where valueCheck = 'medium') as 'medium',
                (select count(*) from comissoes where valueCheck = 'plus') as plus
from comissoes;


select count(valueCheck) from comissoes;


