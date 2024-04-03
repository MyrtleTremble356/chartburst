const toUpperCase = require('./toUpperCase')
const isOdd = require('./isOdd')

module.exports = (num, precision) => {
    return parseFloat(num.toFixed(precision));
  }