import { useDispatch } from 'react-redux';
import css from './RegisterForm.module.css';
import { registerNewUser } from 'redux/auth/authOperations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const hendleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const newRegisterData = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    dispatch(registerNewUser(newRegisterData));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={hendleSubmit} autoComplete="off">
      <label className={css.form__label}>
        Username
        <input type="text" name="name" />
      </label>
      <label className={css.form__label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.form__label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit" className={css.form__btn}>
        Register
      </button>
    </form>
  );
};
