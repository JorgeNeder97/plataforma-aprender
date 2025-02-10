"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('roles', [
            // id: 1
            { nombre: "Admin" },

            // id: 2
            { nombre: "User" },

            // id: 3
            { nombre: 'Contable' },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('roles', null);
    },
};
