import { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from 'redux/contactsSlice';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const resetInput = () => {
    setName('');
    setNumber('');
  };

  const handleInputChange = evt => {
    switch (evt.target.name) {
      case 'name':
        setName(evt.target.value);
        break;
      case 'number':
        setNumber(evt.target.value);
        break;
      default:
        console.log('Sorry, something going wrong. Try again later.');
    }
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    const newContact = {
      name: `${name}`,
      number: `${number}`,
    };
    if (contacts.find(el => el.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    } else {
      dispatch(addContact(newContact));
    }

    resetInput();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label htmlFor="name" className={css.form__label}>
        Name
      </label>
      <input
        className={css.form__input}
        type="text"
        id="name"
        name="name"
        onChange={handleInputChange}
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor="number" className={css.form__label}>
        Number
      </label>
      <input
        className={css.form__input}
        type="tel"
        name="number"
        onChange={handleInputChange}
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={css.form__btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
