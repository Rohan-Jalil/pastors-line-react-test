import {GET_CONTACTS, CONTACTS_UPDATING} from 'redux/Constants/Constants';
import {getContacts} from 'service/Contacts/Contacts';
import {uniqueArray} from 'components/utils/Helper';

export const fetchContacts =
  ({params}) =>
  async (dispatch, getState) => {
    dispatch({type: CONTACTS_UPDATING, payload: true});
    const data = await getContacts({params, dispatch});
    const {contacts} = getState().contacts;
    dispatch({
      type: GET_CONTACTS,
      payload: uniqueArray(contacts.concat(data)),
    });
    dispatch({type: CONTACTS_UPDATING, payload: false});
  };

export const resetContacts = () => {
  return (dispatch) => {
    dispatch({type: GET_CONTACTS, payload: []});
  };
};
