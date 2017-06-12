const AppDispatcher = require('../dispatchers/AppDispatcher');
const AppConstants = require('../constants/AppConstants');

let Actions = {
  searchMovie: function(movie) {
    AppDispatcher.handleViewAction({
      actionType:AppConstants.SEARCH_MOVIES,
      movie:movie
    })
  }
}

module.exports = Actions;
