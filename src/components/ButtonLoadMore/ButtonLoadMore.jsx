import css from 'components/ButtonLoadMore/ButtonLoadMore.module.css';

export const ButtonLoadMore = ({ onClick }) => {
  return (
    <div className={css.box}>
      <button className={css.button} onClick={onClick} type="button">
        Load more
      </button>
    </div>
  );
};
