module.exports = (sequelize, DataTypes) => {
    const alias = "Foto";

    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING(400),
            allowNull: false,
        },
        operativo_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: {
                    table: "operativos",
                },
                key: "id",
            },
            onDelete: "CASCADE",
        },
    };

    const config = {
        tableName: 'fotos',
        timestamps: true,
    };

    const Foto = sequelize.define(alias, cols, config);

    return Foto;
};