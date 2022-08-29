export const transformContacts = (data) => {
  // transform

  let contacts_ids = data.contacts_ids;
  let contacts = [];

  contacts_ids.forEach((val) => {
    if (data.contacts[val]) {
      contacts.push(data.contacts[val]);
    }
  });
  return contacts;
};
