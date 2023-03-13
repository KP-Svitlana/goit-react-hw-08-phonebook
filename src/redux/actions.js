import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction(
  'contacts/addContsct',
  (name, number) => {
    return {
      payload: {
        name,
        id: nanoid(),
        number,
      },
    };
  }
);

export const deleteContact = createAction('contacts/deleteContact', id => {
  return { payload: { id } };
});
