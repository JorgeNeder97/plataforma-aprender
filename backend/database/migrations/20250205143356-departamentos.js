"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("departamentos", { 
            id: {
               type: Sequelize.INTEGER.UNSIGNED,
               primaryKey: true,
               autoIncrement: true,
               allowNull: false,
            },
            nombre: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("departamentos");
    },
};
