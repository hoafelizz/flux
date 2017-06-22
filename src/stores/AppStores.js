import AppDispatcher from '../dispathcer/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import {EventEmitter} from 'events';
let assign = require('object-assign');

const CHANGE_EVENT = 'change';

let movies = [];
let status = null

let AppStore = assign({}, EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getMovies() {
    return movies;
  },

  getStatus() {
    return status;
  }

})

export default AppStore;

AppDispatcher.register((payload)=>{
    let action = payload.action;

    switch (action.actionType) {
        case AppConstants.RECEIVE_MOVIES_RESULT:
            movies = action.data;
            status = '';
            AppStore.emitChange();
            break;
        case AppConstants.SEARCH_MOVIES:
            status = 'Movies not found';
            AppStore.emitChange();
            break;
        default:
        
            break;
    }

    return true;

});