const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
  const Dinosaure = sequelize.define("Dinosaure", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Scientific_name: {
      type: DataTypes.STRING,
    },
    apparitionYear: {
      type: DataTypes.INTEGER,
    },
    disapparitionYear: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.STRING,
    },
    color: {
      type: DataTypes.STRING,
    },
  });

  return Dinosaure
};
