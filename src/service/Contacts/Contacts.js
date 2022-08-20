import {pastorsline} from 'service/Index';
import {transformContacts} from 'transformers/Contacts';

export const getContacts = ({params}) => {
  return pastorsline
    .get('/api/contacts.json', {params})
    .then(function (response) {
      if (response.status == 200) {
        return response.data.contacts
          ? transformContacts(response.data)
          : {};
      } else {
        return null;
      }
    })
    .catch(function (error) {
      return null;
    });
};
