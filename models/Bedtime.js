const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Bedtime', {
    bedtimeId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'BedtimeId'
    },
    childId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Child',
        key: 'childId',
      },
      field: 'ChildId'
    },
    sleepStart: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'SleepStart'
    },
    sleepEnd: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'SleepEnd'
    },
    success: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'Success'
    },
    isNap: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'IsNap'
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
