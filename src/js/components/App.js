const React = require('react');
const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');
const SearchForm = require('./SearchForm');


let App = React.createClass({
  render: function() {
    return (
      <div>
        <SearchForm />
      </div>
    )
  }
});

module.exports = App;
