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

export { isEmpty as i };

//# sourceMappingURL=is-empty-0ea2058d.js.map