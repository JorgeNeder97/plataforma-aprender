"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('operativos', { 
            id: {
                type: Sequelize.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            nombre: {
                type: Sequelize.STRING(200),
                allowNull: false,
            },
            descripcion: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            año_lectivo: {
                type: Sequelize.STRING(4),
                allowNull: false,
            },
            nivel_educativo_id: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
                references: {
                    model: {
                        tableName: 'nivel_educativo',
                    },
                    key: 'id',
                },
                onDelete: 'RESTRICT',
            },
            estado: {
                type: Sequelize.TINYINT(1),
                allowNull: false
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
        await queryInterface.dropTable('operativos');
    },
};
