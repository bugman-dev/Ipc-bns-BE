function logger(req, res, next) {
  const dataToLog = {
    endpoint: req.originalUrl,
    requestMethod: req.method,
    requestBody: req.body,
  };
  console.log(dataToLog);
  next();
}

module.exports = logger;
