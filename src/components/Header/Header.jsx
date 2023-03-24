import css from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const Header = () => {
  return (
    <>
      <NavLink
        // to="/"
        className={({ isActive }) => (isActive ? css.active : css.header__link)}
      >
        Home
      </NavLink>
      <AuthNav />
    </>
  );
};
