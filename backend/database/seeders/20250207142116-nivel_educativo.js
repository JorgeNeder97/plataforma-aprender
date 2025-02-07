"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("nivel_educativo",
            [
                // id: 1
                { nombre: "Nivel Primario" },

                // id: 2
                { nombre: "Nivel Secundario"},
            ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("nivel_educativo", null);
    },
};
