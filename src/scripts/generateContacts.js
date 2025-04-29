import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const existedContacts = await readContacts();
  const newContacts = Array.from({ length: number }, () => createFakeContact());
  const updatedContacts = [...existedContacts, ...newContacts];
  await writeContacts(updatedContacts);
};

generateContacts(5);
