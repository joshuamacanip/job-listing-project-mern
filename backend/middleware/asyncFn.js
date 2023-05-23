function asyncFn(fn) {
  //Return an async fn controller
  return async function (req, res, next) {
    try {
      //Await for result
      await fn(req, res, next);
    } catch (error) {
      //If error was thrown passed it to error middleware
      next(error);
    }
  };
}

module.exports = asyncFn;
