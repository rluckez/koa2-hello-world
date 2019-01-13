const nconf = require('nconf');
const filePath = `./config.${process.env.ENV || process.env.NODE_ENV || 'local'}.json`;

nconf.argv()
  .env()
  .defaults(require(filePath));

console.log(JSON.stringify(nconf.get(), null, 2));

module.exports = nconf;
