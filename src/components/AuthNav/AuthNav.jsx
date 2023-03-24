import css from './AuthNav.module.css';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <>
      <NavLink
        // to="/register"
        className={({ isActive }) =>
          isActive ? css.active : css.authNav__link
        }
      >
        Register
      </NavLink>
      <NavLink
        // to="/login"
        className={({ isActive }) =>
          isActive ? css.active : css.authNav__link
        }
      >
        LogIn
      </NavLink>
    </>
  );
};
