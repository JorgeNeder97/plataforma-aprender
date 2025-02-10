"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('departamentos', [
            // id: 1
            { nombre: "Aguirre" },

            // id: 2
            { nombre: "Alberdi" },

            // id: 3
            { nombre: "Atamisqui" },

            // id: 4
            { nombre: "Avellaneda" },

            // id: 5
            { nombre: "Banda" },

            // id: 6
            { nombre: "Belgrano" },

            // id: 7
            { nombre: "Capital" },

            // id: 8
            { nombre: "Choya" },

            // id: 9
            { nombre: "Copo" },

            // id: 10
            { nombre: "Figueroa" },

            // id: 11
            { nombre: "General Taboada" },

            // id: 12
            { nombre: "Guasayán" },

            // id: 13
            { nombre: "Jiménez" },

            // id: 14
            { nombre: "Juan Felipe Ibarra" },

            // id: 15
            { nombre: "Loreto" },

            // id: 16
            { nombre: "Mitre" },

            // id: 17
            { nombre: "Moreno" },

            // id: 18
            { nombre: "Ojo de Agua" },

            // id: 19
            { nombre: "Pellegrini" },

            // id: 20
            { nombre: "Quebrachos" },

            // id: 21
            { nombre: "Rio Hondo" },

            // id: 22
            { nombre: "Rivadavia" },

            // id: 23
            { nombre: "Robles" },

            // id: 24
            { nombre: "Salavina" },

            // id: 25
            { nombre: "San Martín" },

            // id: 26
            { nombre: "Sarmiento" },

            // id: 27
            { nombre: "Silípica"}
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('departamentos', null);
    },
};
