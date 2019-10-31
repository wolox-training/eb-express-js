const { users } = require('../models');
const errors = require('../errors');
const logger = require('../logger');

exports.createdUser = userForm =>
  users
    .create(userForm)
    .then(() => ({
      message: `User with name ${userForm.name} was create`
    }))
    .catch(err => {
      logger.error('Error trying to created User');
      throw errors.createdUserError(err.message);
    });
