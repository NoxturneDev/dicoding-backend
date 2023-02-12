function errorException(options) {
  const error = new Error(options.message);

  return error;
}

module.exports = errorException;
