create database blank_paper;

use blank_paper;

CREATE TABLE usuario(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    login VARCHAR(70) unique key,
    senha VARCHAR(45)
);


alter table usuario add constraint unique (login);

CREATE TABLE comissoes(
    idComissoes INT PRIMARY KEY AUTO_INCREMENT,
    valueCheck VARCHAR(6),
    textarea_conteudo VARCHAR(140),
    fkUsuario VARCHAR(70),
    foreign key (fkUsuario) references usuario(login)
) auto_increment = 1000;


select * from comissoes;
select * from usuario;

select * from comissoes join usuario where fkUsuario = login;
select usuario.login, comissoes.textarea_conteudo, comissoes.valueCheck from usuario 
join comissoes where usuario.login = comissoes.fkUsuario and usuario.login = 'jorge@gmail.com';

select max(valueCheck) as 'Pacote com menos requisição', min(valueCheck) as 'Pacote com mais requisição' from comissoes;
select count(valueCheck) as 'Quantidade de pacotes' from comissoes where valueCheck = 'basic';
select count(valueCheck) as 'Quantidade de pacotes' from comissoes where valueCheck = 'medium';
select count(valueCheck) as 'Quantidade de pacotes' from comissoes where valueCheck = 'plus';
 
select * from comissoes inner join usuario on fkUsuario = login and valueCheck = 'basic';
select * from comissoes inner join usuario on fkUsuario = login and valueCheck = 'medium';
select * from comissoes inner join usuario on fkUsuario = login and valueCheck = 'plus';

