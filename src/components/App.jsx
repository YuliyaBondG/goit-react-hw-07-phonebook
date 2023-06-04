import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import css from './App.module.css';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>

      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />

      <ToastContainer />
    </div>
  );
};
