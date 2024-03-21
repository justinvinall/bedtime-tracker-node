const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Bedtime', {
    BedtimeId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ChildId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Child',
        key: 'ChildId'
      }
    },
    SleepStart: {
      type: DataTypes.DATE,
      allowNull: false
    },
    SleepEnd: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Success: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    IsNap: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Bedtime',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Bedtime",
        unique: true,
        fields: [
          { name: "BedtimeId" },
        ]
      },
    ]
  });
};
