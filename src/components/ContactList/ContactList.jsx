import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  return (
    <ul className={css.contactList}>
      {contacts.map(c => (
        <Contact key={c.id} contact={c} />
      ))}
    </ul>
  );
}
