const React = require('react');
const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');


let App = React.createClass({
  render: function() {
    return (
      <div>
        Hello World!
      </div>
    )
  }
});

module.exports = App;
