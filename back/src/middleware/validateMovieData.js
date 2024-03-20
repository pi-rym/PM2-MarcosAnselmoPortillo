const validateMovieData = (req, res, next) => {
  const { title, year, director, duration, genre, rate, poster} = req.body;
  if (!title || !year || !director || !duration || !genre || !rate || !poster) {
    return res.status(400).send({ message: 'All fields are required' });
  }
  if (typeof year !== 'number' || year.toString().length !== 4) {
    return res.status(400).send({ message: 'Year must be a 4 digit number' });
  }
  next();
}

module.exports = validateMovieData;
