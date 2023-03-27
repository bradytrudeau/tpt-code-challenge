const env = require('dotenv').config();
const dotenvParseVariables = require('dotenv-parse-variables');

dotenvParseVariables(env);

module.exports = require('./main.js');
