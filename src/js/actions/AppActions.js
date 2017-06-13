const AppDispatcher = require('../dispatchers/AppDispatcher');
const AppConstants = require('../constants/AppConstants');

let Actions = {
  searchMovie: function(movie) {
    AppDispatcher.handleViewAction({
      actionType:AppConstants.SEARCH_MOVIES,
      movie:movie
    });
  },
  receiveMovieResults: function(movies) {
    console.log(movies);
    AppDispatcher.handleViewAction({
      actionType:AppConstants.RECIEVE_MOVIE_RESULTS,
      movies:movies
    });
  }
}

module.exports = Actions;
