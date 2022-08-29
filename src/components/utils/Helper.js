export const checkEvenId = ({contactId}) => {
  return contactId % 2 == 0;
};

export const uniqueArray = (duplicates) => {
  return Array.from(new Set(duplicates.map((a) => a.id))).map((id) => {
    return duplicates.find((a) => a.id === id);
  });
};
