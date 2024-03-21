const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Prize', {
    PrizeId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Description: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    ImageUrl: {
      type: DataTypes.STRING(2048),
      allowNull: true
    },
    Priority: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Prize',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Prize",
        unique: true,
        fields: [
          { name: "PrizeId" },
        ]
      },
    ]
  });
};
