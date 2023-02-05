import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  resetInput = () => {
    this.setState({ name: '' });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    this.state.contacts.push({ name: this.state.name, id: nanoid() });
    this.resetInput();
  };

  handelNameChange = evt => {
    this.setState({ name: evt.target.value });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={this.handelNameChange}
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(el => {
            return <li key={el.id}>{el.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}
