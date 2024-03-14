const Repository = require("../modules/Repository");

const repository = new Repository();

module.exports = {
  getMovies: async () => {
    try {
        await repository.loadMovies();
        return repository.getAllMovies();       
    } catch (error) {
        console.log('Error getting Movies', error);
        throw error;
    }
    }
}