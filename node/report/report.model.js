const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        empId: { type: DataTypes.NUMBER, allowNull: false },
        userName: { type: DataTypes.STRING, allowNull: false },
        date: { type: DataTypes.STRING, allowNull: false },
        project: { type: DataTypes.STRING, allowNull: false },
        workReport: { type: DataTypes.STRING, allowNull: false },
        hash: { type: DataTypes.STRING, allowNull: false }
    };

    const options = {
        defaultScope: {
            // exclude hash by default
            attributes: { exclude: ['hash'] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('Report', attributes, options);
}