const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Band extends Model {}

Band.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [6],
      },
    },
    genre: {
        type: DataTypes.STRING,
    },
    members:{
        type: DataTypes.STRING,
        references: {
            model: 'user',
            key: 'id',
            unique: false
          }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'band',
  }
);

module.exports = Band;
