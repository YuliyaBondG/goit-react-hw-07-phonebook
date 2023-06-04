import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';
import { fetchContacts, deleteContact } from 'redux/operations';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {isLoading && <div className={css.spinner}></div>}
      {!filteredContacts?.length && !error && !isLoading && (
        <p className={css.contactName}>No contacts found.</p>
      )}

      {error && <p className={css.contactName}>{error}</p>}

      <ul className={css.list}>
        {filteredContacts.map(({ id, name, phone }) => (
          <li className={css.item} key={id}>
            <p className={css.contactName}>
              {name}: {phone}
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
    </>
  );
};
