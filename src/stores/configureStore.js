
import {createStore,combineReducers} from 'redux';
import studentReducers from '../reducers/studentReducers';


const configureStore=()=>{
    const store=createStore(combineReducers({
       students:studentReducers
    }))
    return store
}


export default configureStore
