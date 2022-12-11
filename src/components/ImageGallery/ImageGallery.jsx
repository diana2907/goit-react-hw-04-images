import { fetchImages } from 'components/FetchImages/FetchImages';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import css from 'components/ImageGallery/ImageGallery.module.css';
import { Loader } from 'components/Loader/Loader';

export class ImageGallery extends Component {
  state = { images: null, loading: false };

  componentDidUpdate(prevProps, prevState) {
    const nextValue = this.props.valueQuery;
    const prevValue = prevProps.valueQuery;

    const nextPage = this.props.page;
    const prevPage = prevProps.page;

    if (prevValue !== nextValue || prevPage !== nextPage) {
      this.setState({ loading: true });
      if (prevValue !== nextValue) {
        this.setState({ images: null });
      }
      fetchImages(nextValue, nextPage).then(image => {
        if (!prevState.images || prevValue !== nextValue) {
          this.setState({ images: image.data.hits });
        } else {
          this.setState({
            images: [...prevState.images, ...image.data.hits],
          });
        }
        this.setState({ loading: false });
      });
    }
  }

  render() {
    const { images, loading } = this.state;
    return (
      <>
        <ul className={css.gallery}>
          {images &&
            images.map(image => (
              <li className="gallery-item" key={image.id}>
                <ImageGalleryItem image={image} />
              </li>
            ))}
        </ul>
        {loading && <Loader />}
      </>
    );
  }
}
