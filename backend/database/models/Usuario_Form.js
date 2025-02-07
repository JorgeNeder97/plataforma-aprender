module.exports = (sequelize, DataTypes) => {
    const alias = "Usuario_Form";
    
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
        // Ejemplo de contraseña: 860055500-aprender13  (estructura: cueanexo-aprender13)
        contraseña: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
    };

    const config = {
        tableName: 'usuarios_form',
        timestamps: true,
    };

    const Usuario_Form = sequelize.define(alias, cols, config);

    Usuario_Form.associate = (models) => {

    };

    return Usuario_Form;
};