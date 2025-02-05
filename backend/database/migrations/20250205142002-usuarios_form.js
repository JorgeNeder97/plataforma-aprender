"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("usuarios_form", { 
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
            // Ejemplo de contraseña: 860055500-aprender13  (estructura: cueanexo-aprender13)
            contraseña: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("usuarios_form");
    },
};
