const AppDispatcher = require('../dispatchers/AppDispatcher');
const AppConstants = require('../constants/AppConstants');

let Actions = {
  searchMovie: function(movie) {
    console.log("Searching for ", movie.title);
    AppDispatcher.handleViewAction({
      actionType:AppConstants.SEARCH_MOVIES,
      movie:movie
    })
  }
}

module.exports = Actions;
