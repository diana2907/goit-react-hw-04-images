import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from 'components/ImageGallery/ImageGallery.module.css';

export const ImageGallery = ({ images }) => {
  return (
    <>
      <ul className={css.gallery}>
        {images.map(image => (
          <li className="gallery-item" key={image.id}>
            <ImageGalleryItem image={image} />
          </li>
        ))}
      </ul>
    </>
  );
};
