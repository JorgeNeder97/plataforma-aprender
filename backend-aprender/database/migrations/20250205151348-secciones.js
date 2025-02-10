"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('secciones', { 
            id: {
                type: Sequelize.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            nombre: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            año: {
                type: Sequelize.TINYINT(12),
                allowNull: false,
            },
            turno: {
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            matricula: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
            },
            aplicador_id: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: true,
                // Se agrega en una migración específica aparte.
                // references: {
                //     model: {
                //         tableName: 'aplicadores',
                //     },
                //     key: 'id',
                // },
                // onDelete: 'SET NULL',
            },
            escuela_id: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
                references: {
                    model: {
                        tableName: 'escuelas',
                    },
                    key: 'id',
                },
                onDelete: 'CASCADE'
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
        await queryInterface.dropTable('secciones');
    },
};
