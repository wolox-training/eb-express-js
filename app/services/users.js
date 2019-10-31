const { User } = require('../models');
const errors = require('../errors');
const logger = require('../logger');

exports.createdUser = userForm =>
  User.create(userForm)
    .then(() => ({
      message: `User with name ${userForm.firstName} was create`
    }))
    .catch(err => {
      logger.error('Error trying to created User');
      throw errors.createdUserError(err.message);
    });
