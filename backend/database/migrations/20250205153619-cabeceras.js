"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('cabeceras', { 
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
            numero_cabecera: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
            },
            direccion: {
                type: Sequelize.STRING(250),
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
            localidad_id: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
                references: {
                    model: {
                        tableName: 'localidades',
                    },
                    key: 'id',
                },
                onDelete: 'RESTRICT',
            },
            coordinador_id: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
                // Se agrega con una migración específica aparte.
                // references: {
                //     model: {
                //         tableName: 'coordinadores',
                //     },
                //     key: 'id',
                // },
                // onDelete: 'SET NULL',
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
            estado: {
                type: Sequelize.TINYINT(1),
                allowNull: false,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('cabeceras');
    },
};
