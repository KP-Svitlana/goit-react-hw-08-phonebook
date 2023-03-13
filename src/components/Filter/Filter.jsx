import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';

import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const filterChange = evt => {
    dispatch(addFilter(evt.target.value));
  };

  return (
    <div className={css.filter}>
      <label htmlFor="filter" className={css.filter_label}>
        Find contacts by name
      </label>
      <input
        className={css.filter__input}
        type="text"
        name="filter"
        onChange={filterChange}
      ></input>
    </div>
  );
};

// Filter.propTypes = {
//   onFilterChange: PropTypes.func.isRequired,
// };
