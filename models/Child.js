const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Child', {
    childId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'ChildId'
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'Name'
    }
  }, {
    sequelize,
    tableName: 'Child',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Child",
        unique: true,
        fields: [
          { name: "ChildId" },
        ]
      },
    ]
  });
};
