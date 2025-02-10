module.exports = (sequelize, DataTypes) => {
    const alias = "Ambito";

    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING(7),
            allowNull: false,
        },
    };

    const config = {
        tableName: "ambito",
        timestamps: true,
    };

    const Ambito = sequelize.define(alias, cols, config);

    Ambito.associate = (models) => {
        Ambito.hasMany(models.Escuela, {
            as: 'escuela_ambito',
            foreignKey: 'ambito_id',
        });

        Ambito.hasMany(models.Aplicador, {
            as: 'aplicador_ambito',
            foreignKey: 'ambito_id',
        });
    };

    return Ambito;
};