import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  resetInput = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    this.state.contacts.push({
      name: this.state.name,
      id: nanoid(),
      number: this.state.number,
    });
    this.resetInput();
  };

  handelInputChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  getFilteredContacts = () => {
    const normalizeFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(el =>
      el.name.toLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={this.handelInputChange}
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label htmlFor="number">Number</label>
          <input
            type="tel"
            name="number"
            onChange={this.handelInputChange}
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <label htmlFor="filter">Find contscts by name</label>
        <input
          type="text"
          name="filter"
          onChange={this.handelInputChange}
          value={this.state.filter}
        ></input>
        <ul>
          {filteredContacts.map(el => {
            return (
              <li key={el.id}>
                {el.name}:<span>{el.number}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
