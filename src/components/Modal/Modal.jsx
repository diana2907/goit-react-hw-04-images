import css from 'components/Modal/Modal.module.css';

export const Modal = ({ image, description, closeModal }) => {
  return (
    <div className={css.overlay} onClick={closeModal}>
      <div className={css.modal}>
        <img className={css.img} src={image} alt={description} />
        <button className={css.btn} type="button" onClick={closeModal}>
          X
        </button>
      </div>
    </div>
  );
};
