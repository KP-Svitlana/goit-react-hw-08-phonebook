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
