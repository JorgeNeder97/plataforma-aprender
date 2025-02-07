module.exports = (sequelize, DataTypes) => {
    const alias = "Material";

    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING(400),
            allowNull: false,
        },
        operativo_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: {
                    table: "operativos",
                },
                key: "id",
            },
            onDelete: "CASCADE",
        },
    };

    const config = {
        tableName: "materiales",
        timestamps: true,
    };

    const Material = sequelize.define(alias, cols, config);

    Material.associate = (models) => {

    };

    return Material;
};