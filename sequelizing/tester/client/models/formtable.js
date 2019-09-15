

module.exports = function(sequelize, DataTypes) {
  var Formtable = sequelize.define("Formtable", {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    password: DataTypes.STRING
  });
  return Formtable;
};
