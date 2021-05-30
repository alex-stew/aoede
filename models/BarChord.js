const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BarChord extends Model {}

BarChord.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      position: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bar_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: {
        model: 'bar',
        key: 'id',
        }
      },
      chord_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: {
        model: 'chord',
        key: 'id',
        }
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'barChord',
    }
  );
  
  module.exports = BarChord;