import {Dispatcher} from 'flux';

class AppDispatcher extends Dispatcher{
    handeViewAction(action){
        console.log('Dispatched --', action);
        let payload = {
            source: 'VIEW_ACTION',
            action: action
        }
        super.dispatch(action);
    }
}

export default new AppDispatcher();