import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const existedContacts = await readContacts();
    const newContact = createFakeContact();
    const updatedContacts = [...existedContacts, newContact];
    await writeContacts(updatedContacts);
  } catch (error) {
    console.error('Error adding contact:', error.message);
  }
};

addOneContact();
