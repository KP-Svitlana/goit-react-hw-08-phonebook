import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const LogContacts = JSON.parse(localStorage.getItem('contacts-log'));
    if (LogContacts) {
      this.setState({ contacts: LogContacts });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('contacts-log', JSON.stringify(this.state.contacts));
  }

  addNewContact = ({ name, number }) => {
    const newContact = {
      name: name,
      id: nanoid(),
      number: number,
    };

    if (this.state.contacts.find(el => el.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    }
  };

  deleteContact = id => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(item => item.id !== id),
      };
    });
  };

  filterChange = evt => {
    this.setState({ filter: evt.target.value });
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
        <ContactForm onSubmit={this.addNewContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onFilterChange={this.filterChange} />
        <ContactList
          data={filteredContacts}
          onDeleteBtnClick={this.deleteContact}
        />
      </div>
    );
  }
}
