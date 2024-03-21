const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Child', {
    ChildId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(100),
      allowNull: false
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
