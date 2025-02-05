"use strict";

// Explicación del funcionamiento de las columnas de la tabla cruces:
// EL APLICADOR UNO PERTENECE A LA SECCION UNO y HACE EL CRUCE A LA SECCION DOS
// EL APLICADOR DOS PERTENECE A LA SECCION DOS y HACE EL CRUCE A LA SECCION UNO

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('cruces', { 
            id: {
                type: Sequelize.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            seccion_uno_id: {
                type:Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
                references: {
                    model: {
                        tableName: 'secciones',
                    },
                    key: 'id',
                },
                onDelete: 'CASCADE',
            },
            seccion_dos_id: {
                type:Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
                references: {
                    model: {
                        tableName: 'secciones',
                    },
                    key: 'id',
                },
                onDelete: 'CASCADE',
            },
            aplicador_uno_id: {
                type:Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
                references: {
                    model: {
                        tableName: 'aplicadores',
                    },
                    key: 'id',
                },
                onDelete: 'CASCADE',
            },
            aplicador_dos_id: {
                type:Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
                references: {
                    model: {
                        tableName: 'aplicadores',
                    },
                    key: 'id',
                },
                onDelete: 'CASCADE',
            },
            observaciones: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            estado: {
                type: Sequelize.TINYINT(1),
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
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('cruces');
    },
};
