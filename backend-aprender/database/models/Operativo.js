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
        Operativo.hasMany(models.Aplicador, {
            as: 'aplicador_operativo',
            foreignKey: 'operativo_id',
        });

        Operativo.hasMany(models.Veedor, {
            as: 'veedor_operativo',
            foreignKey: 'operativo_id',
        });

        Operativo.hasMany(models.Coordinador, {
            as: 'coordinador_operativo',
            foreignKey: 'operativo_id',
        });

        Operativo.hasMany(models.Cabecera, {
            as: 'cabecera_operativo',
            foreignKey: 'operativo_id',
        });

        Operativo.hasMany(models.Cruces, {
            as: 'cruce_operativo',
            foreignKey: 'operativo_id',
        });

        Operativo.hasOne(models.Dato_Estadistico, {
            as: 'dato_estadistico_operativo',
            foreignKey: 'operativo_id',
        });
        
        Operativo.hasMany(models.Foto, {
            as: 'foto_operativo',
            foreignKey: 'operativo_id',
        });

        Operativo.hasMany(models.Material, {
            as: 'material_operativo',
            foreignKey: 'operativo_id',
        });

        Operativo.belongsTo(models.Nivel_Educativo, {
            as: 'operativo_nivel_educativo',
            foreignKey: 'nivel_educativo_id',
        });
    };

    return Operativo;
};