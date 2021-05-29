const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Lyric extends Model {}

Lyric.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    song_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: {
        model: 'song',
        key: 'id',
      }
    },
    chord_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
    modelName: 'lyric',
  }
);

module.exports = Lyric;
