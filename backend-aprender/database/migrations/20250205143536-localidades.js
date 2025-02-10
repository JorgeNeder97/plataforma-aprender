"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('localidades', { 
            id: {
                type: Sequelize.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            nombre: {
                type: Sequelize.STRING(150),
                allowNull: false,
            },
            codigo_postal: {
                type: Sequelize.STRING(10),
                allowNull: true,
            },
            departamento_id: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
                references: {
                    model: {
                        tableName: 'departamentos',
                    },
                    key: 'id',
                },
                onDelete: 'RESTRICT',
            },
            createdAt: {
                type: Sequelize.DATE,
            },
            updatedAt: {
                type: Sequelize.DATE,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('localidades');
    },
};
