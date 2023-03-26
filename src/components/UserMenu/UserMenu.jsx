import css from './UserMenu.module.css';

export const UserMenu = () => {
  return (
    <div className={css.userMenu__wrap}>
      <p className={css.userMenu__text}> email</p>
      <button type="button" className={css.userMenu__btn}>
        LogOut
      </button>
    </div>
  );
};
