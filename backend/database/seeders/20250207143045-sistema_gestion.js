"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("sistema_gestion",
            [
                // id: 1
                { nombre: "Privada" },

                // id: 2
                { nombre: "Estatal"},
            ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("sistema_gestion", null);
    },
};
