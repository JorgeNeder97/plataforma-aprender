module.exports = (sequelize, DataTypes) => {
    const alias = "Dato_Estadistico";

    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
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
        matricula_total: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        presentes_total: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        escuelas_total: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        esc_retiraron_total: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        secciones_total: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        aplicadores_total: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        veedores_total: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
    };

    const config = {
        tableName: "datos_estadisticos",
        timestamps: true,
    };

    const Dato_Estadistico = sequelize.define(alias, cols, config);

    Dato_Estadistico.associate = (models) => {

    };

    return Dato_Estadistico;
};