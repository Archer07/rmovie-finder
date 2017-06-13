const AppActions = require('../actions/AppActions');


module.exports = {
  searchMovies: function(movie) {
    $.ajax({
      url:'http://www.omdbapi.com/?s='+movie.title,
      dataType: 'json',
      cache:false,
      success: function() {
        AppActions.receiveMovieResults(data.Search);
      }.bind(this),
      error: function(xhr, status, error) {
        console.log(error);
      }.bind(this)
    })
  }
}
