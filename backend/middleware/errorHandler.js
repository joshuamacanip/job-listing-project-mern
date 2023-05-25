const { CustomError } = require("../error/custom-error");

function errorHandler(err, req, res, next) {
  console.log(err);

  //Check if err object is an instance of custom error
  if (err instanceof CustomError) {
    //Return the a response
    return res.status(err.statusCode).json({ msg: err.message });
  }

  return res
    .status(500)
    .json({ msg: "Something went wrong, Please try again later!" });
}

module.exports = errorHandler;
