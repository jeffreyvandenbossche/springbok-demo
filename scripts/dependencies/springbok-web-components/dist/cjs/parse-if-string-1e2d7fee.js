'use strict';

/**
 * Parse the value with `JSON.parse()` if it is a string.
 */
function parseIfString(value) {
  if (typeof value === 'string' && value !== '') {
    try {
      return JSON.parse(value);
    }
    catch (error) {
      throw new Error(error);
    }
  }
  return value;
}

exports.parseIfString = parseIfString;

//# sourceMappingURL=parse-if-string-1e2d7fee.js.map