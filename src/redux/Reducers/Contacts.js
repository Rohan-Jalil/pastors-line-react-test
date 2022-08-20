import {
  GET_CONTACTS,
  CONTACTS_UPDATING,
  CONTACT_DETAIL,
} from 'redux/Constants/Constants';

const INITIAL_STATE = {
  contacts: {},
  contactsUpdating: false,
  contactDetail: {},
};

const contacts = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      };

    case CONTACTS_UPDATING:
      return {
        ...state,
        contactsUpdating: action.payload,
      };

    case CONTACT_DETAIL:
      return {
        ...state,
        contactDetail: action.payload,
      };

    default:
      return state;
  }
};

export default contacts;
