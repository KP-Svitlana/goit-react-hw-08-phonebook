import css from './ContactList.module.css';

import { useDispatch, useSelector } from 'react-redux';
// import { deleteContact } from 'redux/contactsSlice';
import { getData, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getData);

  const normalizeFilter = filter.toLowerCase();
  const data = contacts.filter(el =>
    el.name.toLowerCase().includes(normalizeFilter)
  );

  return (
    <div>
      <ul className={css.contactList__list}>
        {data.map(el => {
          return (
            <li key={el.id} className={css.contactList__item}>
              {el.name}:
              <span className={css.contactList__span}>{el.phone}</span>
              <button
                type="button"
                className={css.contactList__btn}
                onClick={() => {
                  dispatch(deleteContact(el.id));
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
