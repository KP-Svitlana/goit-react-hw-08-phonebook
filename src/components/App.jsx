import ContactForm from './ContactForm/ContactForm';

import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'redux/filterSlice';
import { getData, getFilter } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getData);

  const filterChange = evt => {
    dispatch(addFilter(evt.target.value));
  };

  const getFilteredContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(el =>
      el.name.toLowerCase().includes(normalizeFilter)
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 320,
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter onFilterChange={filterChange} />
      <ContactList data={getFilteredContacts()} />
    </div>
  );
};
