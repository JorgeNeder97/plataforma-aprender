module.exports = (sequelize, DataTypes) => {
    const alias = "Departamento";

    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
         },
         nombre: {
             type: DataTypes.STRING(100),
             allowNull: false,
         },
    };

    const config = {
        tableName: "departamentos",
        timestamps: true,
    };

    const Departamento = sequelize.define(alias, cols, config);

    Departamento.associate = (models) => {

    };

    return Departamento;
};