module.exports = (sequelize, DataTypes) => {
    const alias = "Cabecera";

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
        numero_cabecera: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        direccion: {
            type: DataTypes.STRING(250),
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
        localidad_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: {
                    tableName: 'localidades',
                },
                key: 'id',
            },
            onDelete: 'RESTRICT',
        },
        coordinador_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
            references: {
                model: {
                    tableName: 'coordinadores',
                },
                key: 'id',
            },
            onDelete: 'SET NULL',
        },
        operativo_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: {
                    tableName: 'operativos',
                },
                key: 'id',
            },
            onDelete: 'CASCADE',
        },
        estado: {
            type: DataTypes.TINYINT(1),
            allowNull: false,
        },
    };

    const config = {
        tableName: "cabeceras",
        timestamps: true,
    };

    const Cabecera = sequelize.define(alias, cols, config);

    Cabecera.associate = (models) => {
        Cabecera.belongsTo(models.Departamento, {
            as: 'cabecera_departamento',
            foreignKey: 'departamento_id',
        });

        Cabecera.belongsTo(models.Localidad, {
            as: 'cabecera_localidad',
            foreignKey: 'localidad_id',
        });

        Cabecera.hasOne(models.Coodinador, {
            as: 'cabecera_coordinador',
            foreignKey: 'coordinador_id',
        });

        Cabecera.belongsTo(models.Operativo, {
            as: 'cabecera_operativo',
            foreignKey: 'operativo_id',
        });

        Cabecera.hasMany(models.Escuela, {
            as: 'escuela_cabecera',
            foreignKey: 'cabecera_id',
        });
    };

    return Cabecera;
};