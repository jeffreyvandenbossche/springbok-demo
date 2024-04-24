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

export { parseIfString as p };

//# sourceMappingURL=parse-if-string-dba46397.js.map