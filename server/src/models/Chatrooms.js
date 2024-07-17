const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Chatroom = sequelize.define('Chatroom', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  created_by: {
    type: DataTypes.UUID,
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = Chatroom;
