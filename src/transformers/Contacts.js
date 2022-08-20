export const transformContacts = (data) => {
  // transform
  const contacts = data.contacts ? data.contacts : {};
  return contacts;
};
