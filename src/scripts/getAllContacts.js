import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.log('You have no contacts');
    }
    return contacts;
  } catch (error) {
    console.log('Error reading contacts:', error.message);
  }
};

console.log(await getAllContacts());
