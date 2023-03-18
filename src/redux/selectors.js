import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(el =>
      el.name.toLowerCase().includes(normalizeFilter)
    );
  }
);
