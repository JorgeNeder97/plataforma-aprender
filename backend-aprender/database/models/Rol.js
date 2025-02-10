module.exports = (sequelize, DataTypes) => {
    const alias = 'Rol';
    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
    };
    const config = {
        tableName: 'roles',
        timestamps: true,
    };

    const Rol = sequelize.define(alias, cols, config);

    Rol.associate = (models) => {
        Rol.hasMany(models.Usuario, {
            as: 'usuario_rol',
            foreignKey: 'rol_id',
        });
    };

    return Rol;
};
