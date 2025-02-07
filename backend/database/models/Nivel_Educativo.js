module.exports = (sequelize, DataTypes) => {
    const alias = "Nivel_Educativo";

    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
    };

    const config = {
        tableName: "nivel_educativo",
        timestamps: true,
    };

    const Nivel_Educativo = sequelize.define(alias, cols, config);

    Nivel_Educativo.associate = (models) => {

    };

    return Nivel_Educativo;
};