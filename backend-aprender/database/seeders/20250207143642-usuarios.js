"use strict";
const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        const hashedOne = await bcrypt.hash('Jorgito13', 10)

        await queryInterface.bulkInsert("usuarios",
            [
                // id: 1
                {
                    nombre: 'Jorge Neder',
                    contraseña: hashedOne,
                    rol_id: 1,
                },

                // id: 2
                {
                    nombre: 'Adriana Noemi Sanchez',
                    contraseña: 'Aprender13',
                    rol_id: 1,
                },

                // id: 3
                {
                    nombre: 'Valeria Moreno',
                    contraseña: 'Aprender13',
                    rol_id: 2,
                },

                // id: 4
                {
                    nombre: 'Cecilia Urbani',
                    contraseña: 'Aprender13',
                    rol_id: 2,
                },

                // id: 5
                {
                    nombre: 'Ana Tolosa',
                    contraseña: 'Aprender13',
                    rol_id: 2,
                },

                // id: 6
                {
                    nombre: 'Ricardo Benites',
                    contraseña: 'Aprender13',
                    rol_id: 2,
                },

                // id: 7
                {
                    nombre: 'Adriana Suárez',
                    contraseña: 'Aprender13',
                    rol_id: 2,
                },

                // id: 8
                {
                    nombre: 'Luciana Tenreyro',
                    contraseña: 'Aprender13',
                    rol_id: 2,
                },

                // id: 9
                {
                    nombre: 'Augusto Donis',
                    contraseña: 'Aprender13',
                    rol_id: 3,
                },

                // id: 10
                {
                    nombre: 'Florencia Pato',
                    contraseña: 'Aprender13',
                    rol_id: 3,
                },
            ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("usuarios", null);
    },
};