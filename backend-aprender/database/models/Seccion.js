module.exports = (sequelize, DataTypes) => {
    const alias = "Seccion";

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
        año: {
            type: DataTypes.TINYINT(12),
            allowNull: false,
        },
        turno: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        matricula: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        aplicador_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
            references: {
                model: {
                    tableName: 'aplicadores',
                },
                key: 'id',
            },
            onDelete: 'SET NULL',
        },
        escuela_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: {
                    tableName: 'escuelas',
                },
                key: 'id',
            },
            onDelete: 'CASCADE'
        },
    };

    const config = {
        tableName: "secciones",
        timestamps: true,
    };

    const Seccion = sequelize.define(alias, cols, config);

    Seccion.associate = (models) => {
        Seccion.belongsTo(models.Aplicador, {
            as: 'aplicador_seccion',
            foreignKey: 'aplicador_id',
        });

        Seccion.belongsTo(models.Escuela, {
            as: 'escuela_seccion',
            foreignKey: 'escuela_id',
        });

        Seccion.hasOne(models.Cruce, {
            as: 'cruce_seccion_uno',
            foreignKey: 'seccion_uno_id',
        });

        Seccion.hasOne(models.Cruce, {
            as: 'cruce_seccion_dos',
            foreignKey: 'seccion_dos_id',
        });
    };

    return Seccion;
};