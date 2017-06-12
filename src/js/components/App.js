const React = require('react');
const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');
const SearchForm = require('./SearchForm');


function getAppState() {
  return;
}

let App = React.createClass({
  getInitialState: function() {
    return getAppState();
  },
  componentDidMount: function() {
    AppStore.addChangeListener(this._onChange);
  },
  componentWillMount: function() {
    AppStore.removeChangeListener(this._onChange);

  }
  render: function() {
    return (
      <div>
        <SearchForm />
      </div>
    )
  },
  _onChange: function() {
    this.setState(getAppState);
  }
});

module.exports = App;
