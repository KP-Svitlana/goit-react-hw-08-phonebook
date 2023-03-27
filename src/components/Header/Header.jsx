import css from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <div className={css.headerLink__wrap}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? css.active : css.header__link
          }
        >
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive ? css.active : css.header__link
            }
          >
            Contacts
          </NavLink>
        )}
      </div>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
