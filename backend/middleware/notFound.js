function notFound(req, res) {
  res.json({ msg: "Route does not exist!" }).status(500);
}

module.exports = notFound;
