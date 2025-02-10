module.exports = (sequelize, DataTypes) => {
    const alias = "Departamento";

    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
         },
         nombre: {
             type: DataTypes.STRING(100),
             allowNull: false,
         },
    };

    const config = {
        tableName: "departamentos",
        timestamps: true,
    };

    const Departamento = sequelize.define(alias, cols, config);

    Departamento.associate = (models) => {
        Departamento.hasMany(models.Cabecera, {
            as: 'cabecera_departamento',
            foreignKey: 'departamento_id',
        });

        Departamento.hasMany(models.Localidad, {
            as: 'localidad_departamento',
            foreignKey: 'departamento_id',
        });

        Departamento.hasMany(models.Escuela, {
            as: 'escuela_departamento',
            foreignKey: 'departamento_id',
        });
        
    };

    return Departamento;
};