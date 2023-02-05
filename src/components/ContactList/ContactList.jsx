import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ data, onDeleteBtnClick }) => {
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
                  onDeleteBtnClick(el.id);
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

ContactList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
