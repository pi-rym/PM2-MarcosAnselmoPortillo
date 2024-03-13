const {Router} = require ('express');
const movieRouter = require('./movieRoute');

const router = Router();

router.use("/movies", movieRouter);

module.exports = router;