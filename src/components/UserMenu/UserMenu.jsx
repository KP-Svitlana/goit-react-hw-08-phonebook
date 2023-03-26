import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { selectUserEmail } from 'redux/authSelectors';
import { logOutUser } from 'redux/authOperations';

export const UserMenu = () => {
  const userEmail = useSelector(selectUserEmail);
  const dispatch = useDispatch();

  const hendleSubmit = () => {
    dispatch(logOutUser());
  };

  return (
    <div className={css.userMenu__wrap}>
      <p className={css.userMenu__text}> {userEmail}</p>
      <button
        type="buttom"
        className={css.userMenu__btn}
        onClick={hendleSubmit}
      >
        LogOut
      </button>
    </div>
  );
};
