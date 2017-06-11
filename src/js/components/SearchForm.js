const React = require('react');
const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');


let SearchForm = React.createClass({
  render: function() {
    return (
      <div className="search-form col-md-6 col-md-offset-3 jumbotron">
        <h2 className="text-center">Search For a Movie</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" ref='title' placeholder="Enter a movie..." required/>
          </div>
          <div className="col-md-4 col-md-offset-4 text-center">
            <button className="btn btn-primary btn-block" type="submit">Search</button>
          </div>
        </form>
      </div>
    )
  },
  onSubmit: function (e) {
    e.preventDefault();
    let movie = {
      title:this.refs.title.value.trim()
    };
    AppActions.searchMovie(movie);

  }
});

module.exports = SearchForm;
