import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    return `You have ${contacts.length} contacts`;
  } catch (error) {
    console.log(`Error counting contacts: ${error.message}`);
  }
};
console.log(await countContacts());
