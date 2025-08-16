import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import css from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value.trim();
    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <form onSubmit={onSubmit} className={css.contact}>
      <input name="name" placeholder="Name" required />
      <input name="number" placeholder="Number" required />
      <button type="submit">Add contact</button>
    </form>
  );
}
