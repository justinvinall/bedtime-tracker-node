var DataTypes = require("sequelize").DataTypes;
var _Bedtime = require("./Bedtime");
var _Child = require("./Child");
var _Prize = require("./Prize");

function initModels(sequelize) {
  var Bedtime = _Bedtime(sequelize, DataTypes);
  var Child = _Child(sequelize, DataTypes);
  var Prize = _Prize(sequelize, DataTypes);

  Bedtime.belongsTo(Child, { as: "Child", foreignKey: "ChildId"});
  Child.hasMany(Bedtime, { as: "Bedtimes", foreignKey: "ChildId"});

  return {
    Bedtime,
    Child,
    Prize,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
