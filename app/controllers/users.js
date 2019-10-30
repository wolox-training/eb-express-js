const { validateUserRegister } = require('../helpers/validations');

exports.createdUser = req => {
  validateUserRegister(req.body);
};
