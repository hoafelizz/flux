import AppDispatcher from '../dispathcer/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import appAPI from '../utils/AppAPI';

class AppActions{
    searchMovies(movie){
        appAPI.searchMovies(movie, (err, data)=> {
            if(!err){
                AppDispatcher.handeViewAction({
                    actionType: AppConstants.RECEIVE_MOVIES_RESULT,
                    data:data
                })
            }
            else{
                AppDispatcher.handeViewAction({
                    actionType: AppConstants.SEARCH_MOVIES_ERROR
                });
            }
        });
    }
}

export default AppActions;