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

    };

    return Cruce;
};