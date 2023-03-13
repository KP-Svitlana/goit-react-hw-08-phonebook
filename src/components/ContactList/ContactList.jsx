import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/actions';

export const ContactList = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.contacts);

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
