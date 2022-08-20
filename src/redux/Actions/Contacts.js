import {GET_CONTACTS, CONTACTS_UPDATING} from 'redux/Constants/Constants';
import {getContacts} from 'service/Contacts/Contacts';

export const fetchContacts =
  ({params}) =>
  async (dispatch) => {
    dispatch({type: CONTACTS_UPDATING, payload: true});
    const data = await getContacts({params, dispatch});
    dispatch({
      type: GET_CONTACTS,
      payload: data,
    });
    dispatch({type: CONTACTS_UPDATING, payload: false});
  };
