const React = require('react');
const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');


let SearchForm = React.createClass({
  render: function() {
    return (
      <div className="search-form col-md-6 col-md-offset-3">
        <h2 className="text-center">Search For a Movie</h2>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" ref='title' placeholder="Enter a movie..." required/>
          </div>
          <button className="btn btn-primary btn-block" type="submit">Search</button>
        </form>
      </div>
    )
  }
});

module.exports = SearchForm;
