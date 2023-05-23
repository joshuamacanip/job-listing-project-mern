//Custom Error Constructor
class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

//Function that create new error object
function createCustomError(message, statusCode) {
  return new CustomError(message, statusCode);
}

module.exports = {
  createCustomError,
  CustomError,
};
