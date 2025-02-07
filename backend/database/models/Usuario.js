module.exports = (sequelize, DataTypes) => {
    const alias = "Usuario";
    
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
        contraseña: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        rol_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: {
                    tableName: 'roles',
                },
                key: 'id',
            },
            onDelete: 'RESTRICT',
        },
    };
    
    const config = {
        tableName: 'usuarios',
        timestamps: true,
    };

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = (models) => {

    };

    return Usuario;
};