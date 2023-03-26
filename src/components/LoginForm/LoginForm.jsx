import css from './LoginForm.module.css';

export const LoginForm = () => {
  return (
    <form className={css.form} autoComplete="off">
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
