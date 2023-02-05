import PropTypes from 'prop-types';

export const Filter = ({ value, onFilterChange }) => {
  return (
    <div>
      <label htmlFor="filter">Find contscts by name</label>
      <input
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
