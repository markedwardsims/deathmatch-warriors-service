export default (sequelize, DataTypes) => {

    return sequelize.define('warrior', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                notEmpty: true,
                max: 50
            }
        },
        wins: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                max: 50
            }
        }
    },
    {
        timestamps: true,
        freezeTableName: true,
        tableName: 'warriors'
    });

};
