import { useDispatch } from 'react-redux';
import css from './LoginForm.module.css';
import { logInUser } from 'redux/authOperations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const hendleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const userData = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };

    dispatch(logInUser(userData));
    form.reset();
  };

  return (
    <form onSubmit={hendleSubmit} className={css.form} autoComplete="off">
      <label className={css.form__label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.form__label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit" className={css.form__btn}>
        Log In
      </button>
    </form>
  );
};
