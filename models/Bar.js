const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Bar extends Model {}

Bar.init(
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
      lyric: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      song_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: {
          model: 'song',
          key: 'id',
        }
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'bar',
    }
  );
  
  module.exports = Bar;