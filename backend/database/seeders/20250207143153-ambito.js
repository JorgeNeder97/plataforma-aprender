"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("ambito",
            [
                // id: 1
                { nombre: "Rural" },

                // id: 2
                { nombre: "Urbano"},
            ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("ambito", null);
    },
};