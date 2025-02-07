"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('datos_estadisticos', { 
            id: {
                type: Sequelize.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            operativo_id: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
                references: {
                    model: {
                        tableName: 'operativos',
                    },
                    key: 'id',
                },
                onDelete: 'CASCADE',
            },
            matricula_total: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
            },
            presentes_total: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
            },
            escuelas_total: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
            },
            esc_retiraron_total: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
            },
            secciones_total: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
            },
            aplicadores_total: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
            },
            veedores_total: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
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
        await queryInterface.dropTable('datos_estadisticos');
    },
};
