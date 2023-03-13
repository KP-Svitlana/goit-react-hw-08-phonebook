import css from './ContactList.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <ul className={css.contactList__list}>
        {data.map(el => {
          return (
            <li key={el.id} className={css.contactList__item}>
              {el.name}:
              <span className={css.contactList__span}>{el.number}</span>
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
