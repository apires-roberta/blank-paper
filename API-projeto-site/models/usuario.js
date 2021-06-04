'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
	let Usuario = sequelize.define('Usuario', {
		id: {
			field: 'id',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nome: {
			field: 'nome',
			type: DataTypes.STRING,
			allowNull: false
		},
		login: {
			field: 'login',
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			field: 'senha',
			type: DataTypes.STRING,
			allowNull: false
		},
		fkPreferenciaArtistica: {
			field: 'fkPreferenciaArtistica',
			type: DataTypes.INTEGER,
			allowNull: true
		}
	},
		{
			tableName: 'usuario',
			freezeTableName: true,
			underscored: true,
			timestamps: false,
		});

	return Usuario;
};
