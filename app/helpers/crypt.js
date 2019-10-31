const bcrypt = require('bcrypt');

exports.hashingPassword = user => bcrypt.hashSync(user.password, 10);

exports.comparePassword = (password, hash) => bcrypt.compareSync(password, hash);
