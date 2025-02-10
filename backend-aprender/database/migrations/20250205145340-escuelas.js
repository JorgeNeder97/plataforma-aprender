"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('escuelas', { 
            id: {
                type: Sequelize.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            cueanexo: {
                type: Sequelize.STRING(9),
                allowNull: false,
            },
            nombre: {
                type: Sequelize.STRING(200),
                allowNull: false,
            },
            ambito_id: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
                references:{
                    model: {
                        tableName: 'ambito',
                    },
                    key: 'id',
                },
                onDelete: 'RESTRICT',
            },
            sistema_gestion_id: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
                references: {
                    model: {
                        tableName: 'sistema_gestion',
                    },
                    key: 'id',
                },
                onDelete: 'RESTRICT',
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
            direccion: {
                type: Sequelize.STRING(250),
                allowNull: true,
            },
            telefono: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            email: {
                type: Sequelize.STRING(150),
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
            cabecera_id: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: true,
                // Se agrega en una migración específica aparte.
                // references: {
                //     model: {
                //         tableName: 'cabeceras',
                //     },
                //     key: 'id',
                // },
                // onDelete: 'SET NULL'
            },
            veedor_id: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: true,
                // Se agrega en una migración específica aparte.
                // references: {
                //     model: {
                //         tableName: 'veedores',
                //     },
                //     key: 'id',
                // },
                // onDelete: 'SET NULL',
            },
            estado: {
                type: Sequelize.TINYINT(2),
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
        await queryInterface.dropTable('escuelas');
    },
};
