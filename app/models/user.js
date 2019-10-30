module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'users',
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password: DataTypes.STRING
    },
    { underscored: true }
  );
  return User;
};
