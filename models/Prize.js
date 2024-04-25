const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Prize', {
    prizeId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'PrizeId'
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'Name'
    },
    description: {
      type: DataTypes.STRING(500),
      allowNull: true,
      field: 'Description'
    },
    imageUrl: {
      type: DataTypes.STRING(2048),
      allowNull: true,
      field: 'ImageUrl'
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Priority'
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
