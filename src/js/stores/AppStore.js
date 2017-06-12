// most logic goes here
const AppDispatcher = require('../dispatchers/AppDispatcher');
const AppConstants = require('../constants/AppConstants');
const AppAPI = require('../utils/AppAPI.js');

const EventEmitter = require('events').EventEmitter;
const assign = require('object-assign');


const CHANGE_EVENT = 'change';

let _movies = [];
let selected = '';

let AppStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on('change', callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener('change', callback)
  }
});

AppDispatcher.register(function(payload) {
  let action = payload.action;

  switch(action.actionType) {
    case AppConstants.SEARCH_MOVIES:
      console.log("Searching for ", action.movie.title);
      AppStore.emit(CHANGE_EVENT);
      break;

  }
  return true;

})

module.exports = AppStore;
