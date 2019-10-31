const { validateUserRegister } = require('../helpers/validations');
const { createdUser } = require('../services/users');
const logger = require('../logger');
const errors = require('../errors');

exports.createdUser = (req, res, next) => {
  if (validateUserRegister(req.body)) {
    createdUser(req.body)
      .then(response => {
        res.status(201).send(response);
      })
      .catch(next);
  } else {
    res.status(401);
    logger.error('Error trying to created User');
    throw errors.createdUserError('Error with request body');
  }
};
