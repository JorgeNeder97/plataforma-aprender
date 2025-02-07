module.exports = (sequelize, DataTypes) => {
    const alias = "Operativo";

    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        año_lectivo: {
            type: DataTypes.STRING(4),
            allowNull: false,
        },
        nivel_educativo_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: {
                    tableName: 'nivel_educativo',
                },
                key: 'id',
            },
            onDelete: 'RESTRICT',
        },
        estado: {
            type: DataTypes.TINYINT(1),
            allowNull: false
        },
    };

    const config = {
        tableName: "operativos",
        timestamps: true,
    };

    const Operativo = sequelize.define(alias, cols, config);

    Operativo.associate = (models) => {

    };

    return Operativo;
};