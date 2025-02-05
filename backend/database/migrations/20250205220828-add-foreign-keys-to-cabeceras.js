"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addConstraint('cabeceras', {
            field: ['coordinador_id'],
            type: 'foreign key',
            name: 'fk_cabeceras_coordinador',
            references: {
                table: 'coordinadores',
                field: 'id',
            },
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeConstraint('cabeceras', 'fk_cabeceras_coordinador');
    },
};
