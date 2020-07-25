module.exports = function (sequelize, DataTypes) {
  var Score = sequelize.define("Score", {
    username: DataTypes.STRING,
    score: DataTypes.STRING,
    bestTime: DataTypes.STRING,
  });

  Score.associate = function (models) {
    Score.belongsTo(models.User);
  };
  return Score;
};
