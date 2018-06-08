// const path = require('path');

module.exports = env => require(`./webpack.${env}.config.js`);
