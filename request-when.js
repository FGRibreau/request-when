'use strict';

var request = require('requestretry');
var when = require('when');

module.exports = function (options) {
  return when.promise(function (resolve, reject) {
    request(options, function (err, res, body) {
      if (err) {
        return reject(err);
      }

      return resolve(body);
    });
  });
};
