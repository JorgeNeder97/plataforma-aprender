module.exports = (sequelize, DataTypes) => {
    const alias = "Aplicador";

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
        apellido: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        ambito_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: {
                    tableName: 'ambito',
                },
                key: 'id',
            },
            onDelete: 'RESTRICT',
        },
        cuil: {
            type: DataTypes.STRING(11),
            allowNull: false,
        },
        telefono: {
            type: DataTypes.STRING(30),
            allowNull: true,
        },
        correo: {
            type: DataTypes.STRING(100),
            allowNull: true,
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
        tableName: "aplicadores",
        timestamps: true,
    };

    const Aplicador = sequelize.define(alias, cols, config);

    Aplicador.associate = (models) => {
        Aplicador.belongsTo(models.Ambito, {
            as: 'aplicador_ambito',
            foreignKey: 'ambito_id',
        });

        Aplicador.belongsTo(models.Operativo, {
            as: 'aplicador_operativo',
            foreignKey: 'operativo_id',
        });

        Aplicador.hasOne(models.Seccion, {
            as: 'aplicador_seccion',
            foreignKey: 'aplicador_id',
        });

        Aplicador.hasOne(models.Cruce, {
            as: 'cruce_aplicador_uno',
            foreignKey: 'aplicador_uno_id',
        });

        Aplicador.hasOne(models.Cruce, {
            as: 'cruce_aplicador_dos',
            foreignKey: 'aplicador_dos_id',
        });
    };

    return Aplicador;
};