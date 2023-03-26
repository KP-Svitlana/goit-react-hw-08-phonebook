import css from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.headerLink__wrap}>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? css.active : css.header__link
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive ? css.active : css.header__link
          }
        >
          Contacts
        </NavLink>
      </div>

      <AuthNav />
    </header>
  );
};