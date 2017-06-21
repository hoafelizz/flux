import AppDispatcher from '../dispathcer/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

let movies = [];
let status = null

class AppStore extends EventEmitter{
    emitChange(){
        super.emit(CHANGE_EVENT)
    }

    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT, callback);
    }

    getMovies(){
        return movies;
    }

    getStatus(){
        return status;
    }
}

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