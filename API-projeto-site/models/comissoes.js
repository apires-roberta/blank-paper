'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Comissoes = sequelize.define('Comissoes',{
		idComissoes: {
			field: 'idComissoes',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		valueCheck: {
			field: 'valueCheck',
			type: DataTypes.STRING,
			allowNull: false
		},
		textarea_conteudo: {
			field: 'textarea_conteudo',
			type: DataTypes.STRING,
			allowNull: false
		},
		fkUsuario: {
			field: 'fkUsuario',
			foreignKey: true,
			type: DataTypes.STRING,
			allowNull: true
		}
	}, 
	{
		tableName: 'Comissoes', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Comissoes;
};
