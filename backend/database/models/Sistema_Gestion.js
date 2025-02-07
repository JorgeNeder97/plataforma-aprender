module.exports = (sequelize, DataTypes) => {
    const alias = "Sistema_Gestion";

    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING(8),
            allowNull: false,
        },
    };

    const config = {
        tableName: "sistema_gestion",
        timestamps: true,
    };

    const Sistema_Gestion = sequelize.define(alias, cols, config);

    Sistema_Gestion.associate = (models) => {

    };

    return Sistema_Gestion;
};