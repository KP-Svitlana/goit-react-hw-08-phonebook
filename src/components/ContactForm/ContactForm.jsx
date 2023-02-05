import { Component } from 'react';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  resetInput = () => {
    this.setState({ name: '', number: '' });
  };

  handleInputChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    this.props.onSubmit(this.state);
    this.resetInput();
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label htmlFor="name" className={css.form__label}>
          Name
        </label>
        <input
          className={css.form__input}
          type="text"
          id="name"
          name="name"
          onChange={this.handleInputChange}
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
          onChange={this.handleInputChange}
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
  }
}

export default ContactForm;
