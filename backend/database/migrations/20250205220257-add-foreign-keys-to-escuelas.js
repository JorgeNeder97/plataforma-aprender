"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addConstraint("escuelas", {
            fields: ["cabecera_id"],
            type: "foreign key",
            name: "fk_escuelas_cabecera",
            references: {
                table: "cabeceras",
                field: "id",
            },
            onDelete: "SET NULL",
            onUpdate: "CASCADE",
        });

        await queryInterface.addConstraint("escuelas", {
            fields: ["veedor_id"],
            type: "foreign key",
            name: "fk_escuelas_veedor",
            references: {
                table: "veedores",
                field: "id",
            },
            onDelete: "SET NULL",
            onUpdate: "CASCADE",
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeConstraint("escuelas", "fk_escuelas_cabecera");
        await queryInterface.removeConstraint("escuelas", "fk_escuelas_veedor");
    },
};
