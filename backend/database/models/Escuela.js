module.exports = (sequelize, DataTypes) => {
    const alias = "Escuela";

    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        cueanexo: {
            type: DataTypes.STRING(9),
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        ambito_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references:{
                model: {
                    tableName: 'ambito',
                },
                key: 'id',
            },
            onDelete: 'RESTRICT',
        },
        sistema_gestion_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: {
                    tableName: 'sistema_gestion',
                },
                key: 'id',
            },
            onDelete: 'RESTRICT',
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
        direccion: {
            type: DataTypes.STRING(250),
            allowNull: true,
        },
        telefono: {
            type: DataTypes.STRING(20),
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING(150),
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
        cabecera_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
            references: {
                model: {
                    tableName: 'cabeceras',
                },
                key: 'id',
            },
            onDelete: 'SET NULL'
        },
        veedor_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
            references: {
                model: {
                    tableName: 'veedores',
                },
                key: 'id',
            },
            onDelete: 'SET NULL',
        },
        estado: {
            type: DataTypes.TINYINT(2),
            allowNull: false,
        },
    };

    const config = {
        tableName: 'escuelas',
        timestamps: true,
    };

    const Escuela = sequelize.define(alias, cols, config);

    Escuela.associate = (models) => {
        Escuela.belongsTo(models.Ambito, {
            as: 'escuela_ambito',
            foreignKey: 'ambito_id',
        });

        Escuela.belongsTo(models.Sistema_Gestion, {
            as: 'escuela_sistema_gestion',
            foreignKey: 'sistema_gestion_id',
        });

        Escuela.belongsTo(models.Nivel_Educativo, {
            as: 'escuela_nivel_educativo',
            foreignKey: 'nivel_educativo_id',
        });

        Escuela.belongsTo(models.Departamento, {
            as: 'escuela_departamento',
            foreignKey: 'departamento_id',
        });

        Escuela.belongsTo(models.Localidad, {
            as: 'escuela_localidad',
            foreignKey: 'localidad_id',
        });

        Escuela.belongsTo(models.Cabecera, {
            as: 'escuela_cabecera',
            foreignKey: 'cabecera_id',
        });

        Escuela.belongsTo(models.Veedor, {
            as: 'escuela_veedor',
            foreignKey: 'veedor_id',
        });

        Escuela.hasMany(models.Seccion, {
            as: 'escuela_seccion',
            foreignKey: 'escuela_id',
        });
    };

    return Escuela;
};