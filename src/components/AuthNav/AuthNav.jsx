import css from './AuthNav.module.css';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div className={css.authNavLink__wrap}>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive ? css.active : css.authNav__link
        }
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? css.active : css.authNav__link
        }
      >
        LogIn
      </NavLink>
    </div>
  );
};
