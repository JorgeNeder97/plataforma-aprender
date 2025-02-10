module.exports = (sequelize, DataTypes) => {
    const alias = "Cruce";
    
    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        seccion_uno_id: {
            type:DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: {
                    tableName: 'secciones',
                },
                key: 'id',
            },
            onDelete: 'CASCADE',
        },
        seccion_dos_id: {
            type:DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: {
                    tableName: 'secciones',
                },
                key: 'id',
            },
            onDelete: 'CASCADE',
        },
        aplicador_uno_id: {
            type:DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: {
                    tableName: 'aplicadores',
                },
                key: 'id',
            },
            onDelete: 'CASCADE',
        },
        aplicador_dos_id: {
            type:DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: {
                    tableName: 'aplicadores',
                },
                key: 'id',
            },
            onDelete: 'CASCADE',
        },
        observaciones: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        estado: {
            type: DataTypes.TINYINT(1),
            allowNull: false,
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
    };

    const config = {
        tableName: "cruces",
        timestamps: true,
    };

    const Cruce = sequelize.define(alias, cols, config);

    Cruce.associate = (models) => {
        Cruce.belongsTo(models.Seccion, {
            as: 'cruce_seccion_uno',
            foreignKey: 'seccion_uno_id',
        });

        Cruce.belongsTo(models.Seccion, {
            as: 'cruce_seccion_dos',
            foreignKey: 'seccion_dos_id',
        });

        Cruce.belongsTo(models.Aplicador, {
            as: 'cruce_aplicador_uno',
            foreignKey: 'aplicador_uno_id',
        });

        Cruce.belongsTo(models.Aplicador, {
            as: 'cruce_aplicador_dos',
            foreignKey: 'aplicador_dos_id',
        });

        Cruce.belongsTo(models.Operativo, {
            as: 'cruce_operativo',
            foreignKey: 'operativo_id',
        });
    };

    return Cruce;
};