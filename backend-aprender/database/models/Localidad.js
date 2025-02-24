module.exports = (sequelize, DataTypes) => {
    const alias = "Localidad";

    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        codigo_postal: {
            type: DataTypes.STRING(10),
            allowNull: true,
        },
        departamento_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: {
                    tableName: 'departamentos',
                },
                key: 'id',
            },
            onDelete: 'RESTRICT',
        },
    };

    const config = {
        tableName: "localidades",
        timestamps: true,
    };

    const Localidad = sequelize.define(alias, cols, config);

    Localidad.associate = (models) => {
        Localidad.belongsTo(models.Departamento, {
            as: 'localidad_departamento',
            foreignKey: 'departamento_id',
        });

        Localidad.hasMany(models.Escuela, {
            as: 'escuela_localidad',
            foreignKey: 'localidad_id',
        });

        Localidad.hasMany(models.Cabecera, {
            as: 'cabecera_localidad',
            foreignKey: 'localidad_id',
        });
    };

    return Localidad;
};