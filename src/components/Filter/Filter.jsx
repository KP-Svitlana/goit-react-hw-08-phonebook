import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ value, onFilterChange }) => {
  return (
    <div className={css.filter}>
      <label htmlFor="filter" className={css.filter_label}>
        Find contacts by name
      </label>
      <input
        className={css.filter__input}
        type="text"
        name="filter"
        onChange={onFilterChange}
        value={value}
      ></input>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onFilterChange: PropTypes.func.isRequired,
};
