'use strict';

/**
 * Check if the given value is empty.
 */
function isEmpty(value) {
  if (value === null || value === undefined) {
    return true;
  }
  // this checks if it is an empty object
  if (Object.keys(value).length === 0 && value.constructor === Object) {
    return true;
  }
  if (typeof value === 'string' && value === '') {
    return true;
  }
  if (Array.isArray(value) && value.length === 0) {
    return true;
  }
  return false;
}

exports.isEmpty = isEmpty;

//# sourceMappingURL=is-empty-3de4afc0.js.map