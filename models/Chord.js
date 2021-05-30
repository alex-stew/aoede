const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Chord extends Model {}

Chord.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'chord',
  }
);

module.exports = Chord;
