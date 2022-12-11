import { fetchImages } from 'components/FetchImages/FetchImages';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import css from 'components/ImageGallery/ImageGallery.module.css';

export class ImageGallery extends Component {
  state = { images: null };

  componentDidUpdate(prevProps, prevState) {
    const nextValue = this.props.valueQuery;
    const prevValue = prevProps.valueQuery;

    const nextPage = this.props.page;
    const prevPage = prevProps.page;

    if (prevValue !== nextValue || prevPage !== nextPage) {
      fetchImages(nextValue, nextPage).then(image => {
        if (!prevState.images || prevValue !== nextValue) {
          this.setState({ images: image.data.hits });
        } else {
          this.setState({
            images: [...prevState.images, ...image.data.hits],
          });
        }
      });
    }
  }

  render() {
    const { images } = this.state;
    return (
      <ul className={css.gallery}>
        {images &&
          images.map(image => (
            <li className="gallery-item" key={image.id}>
              <ImageGalleryItem image={image} />
            </li>
          ))}
      </ul>
    );
  }
}
