import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css';

export function ImageGalleryItem({
  image: { webformatURL, tags, largeImageURL },
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeClickOverlay = evt => {
    if (evt.currentTarget === evt.target) {
      toggleModal();
    }
  };

  return (
    <>
      <img
        className={css.img}
        src={webformatURL}
        alt={tags}
        onClick={toggleModal}
      />
      {isModalOpen && (
        <Modal
          closeModal={toggleModal}
          closeModalOverlay={closeClickOverlay}
          image={largeImageURL}
          description={tags}
        />
      )}
    </>
  );
}
