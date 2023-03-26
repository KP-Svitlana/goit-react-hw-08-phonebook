import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  return (
    <form className={css.form} autoComplete="off">
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
