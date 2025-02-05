"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('aplicadores', { 
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
            apellido: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            ambito_id: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
                references: {
                    model: {
                        tableName: 'ambito',
                    },
                    key: 'id',
                },
                onDelete: 'RESTRICT',
            },
            cuil: {
                type: Sequelize.STRING(11),
                allowNull: false,
            },
            telefono: {
                type: Sequelize.STRING(30),
                allowNull: true,
            },
            correo: {
                type: Sequelize.STRING(100),
                allowNull: true,
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
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('aplicadores');
    },
};
