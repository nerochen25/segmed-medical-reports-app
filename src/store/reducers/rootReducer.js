import { combineReducers } from 'redux';
import reportReducer from './reportReducer';

const rootReducer = combineReducers({
    reports: reportReducer
});

export default rootReducer;