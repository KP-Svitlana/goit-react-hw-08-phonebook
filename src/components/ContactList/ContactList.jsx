import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map(el => {
          return (
            <li key={el.id} className={css.contactList__item}>
              {el.name}:
              <span className={css.contactList__span}>{el.number}</span>
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
