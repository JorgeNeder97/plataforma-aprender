"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addConstraint('secciones', {
            fields: ['aplicador_id'],
            type: 'foreign key',
            name: 'fk_secciones_aplicador',
            references: {
                table: 'aplicadores',
                field: 'id',
            },
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeConstraint('secciones', 'fk_secciones_aplicador');
    },
};
