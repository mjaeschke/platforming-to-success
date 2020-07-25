module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  });

  User.associate = function (models) {
    // Associating User with Score
    // When a User is deleted, also delete any associated Scores
    User.hasMany(models.Score, {
      onDelete: "cascade",
    });
  };

  return User;
};
