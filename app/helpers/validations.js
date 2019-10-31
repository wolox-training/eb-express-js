const { EMAIL_REG_EX, PASS_REG_EX } = require('../constants');

exports.validateEmail = email => EMAIL_REG_EX.test(email);

exports.validatePassword = pass => PASS_REG_EX.test(pass);

exports.validateUserRegister = userForm =>
  exports.validateEmail(userForm.email) && exports.validatePassword(userForm.password);
