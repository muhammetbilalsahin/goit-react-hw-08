import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operation';
import { useState } from 'react';
import css from './Contact.module.css';

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);

  const handleDelete = (e) => {
    e.stopPropagation(); 
    dispatch(deleteContact(contact.id));
  };

  return (
    <li
      className={`${css.item} ${isActive ? css.active : ''}`}
      onClick={() => setIsActive(!isActive)}
    >
      <span>{contact.name}: {contact.number}</span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}
