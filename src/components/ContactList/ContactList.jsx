import { deleteContact } from 'redux/contactsSlice';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  if (!filteredContacts?.length) {
    return <p className={css.contactName}>No contacts found.</p>;
  }

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <p className={css.contactName}>
            {name}:{number}
          </p>
          <button
            className={css.button}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
