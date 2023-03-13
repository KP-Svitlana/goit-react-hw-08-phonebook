import { addContact, deleteContact } from './actions';

const { createReducer } = require('@reduxjs/toolkit');

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

export const contactsReducer = createReducer(initialState.contacts, {
  [addContact]: (state, action) => {
    if (state.find(el => el.name === action.payload.name)) {
      alert(`${action.payload.name} is already in contacts`);
    } else {
      return [...state, action.payload];
    }
  },
  [deleteContact]: (state, action) => {
    return state.filter(item => item.id !== action.payload.id);
  },
});
