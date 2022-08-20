import {combineReducers} from 'redux';
import contacts from 'redux/Reducers/Contacts';

const rootReducer = combineReducers({
  contacts: contacts,
});

export default rootReducer;
