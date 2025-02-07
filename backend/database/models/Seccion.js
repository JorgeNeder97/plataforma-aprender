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

    };

    return Seccion;
};