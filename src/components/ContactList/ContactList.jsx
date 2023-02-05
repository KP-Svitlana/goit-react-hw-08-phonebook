import PropTypes from 'prop-types';

export const ContactList = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map(el => {
          return (
            <li key={el.id}>
              {el.name}:<span>{el.number}</span>
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
