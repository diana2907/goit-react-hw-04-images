import { Component } from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from 'components/FetchImages/FetchImages';
import { Loader } from 'components/Loader/Loader';
import { ButtonLoadMore } from 'components/ButtonLoadMore/ButtonLoadMore';
import { ToastContainer } from 'react-toastify';

export class App extends Component {
  state = {
    valueQuery: '',
    images: [],
    loading: false,
    page: 0,
    showBtn: false,
  };

  componentDidUpdate(_, prevState) {
    const nextValue = this.state.valueQuery;
    const prevValue = prevState.valueQuery;

    const nextPage = this.state.page;
    const prevPage = prevState.page;

    if (prevValue !== nextValue || prevPage !== nextPage) {
      this.setState({ loading: true });
      if (prevValue !== nextValue) {
        this.setState({ images: [] });
      }
      fetchImages(nextValue, nextPage).then(image => {
        const imageArr = image.data.hits;
        if (!prevState.images || prevValue !== nextValue) {
          this.setState({ images: imageArr });
        } else {
          this.setState({
            images: [...prevState.images, ...imageArr],
          });
        }
        if (nextPage < image.data.totalHits / 12) {
          this.setState({ showBtn: true });
        } else {
          this.setState({ showBtn: false });
        }
        this.setState({ loading: false });
      });
    }
  }

  handleMoreImage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleFormSubmit = valueQuery => {
    this.setState({ valueQuery, page: 1 });
  };

  render() {
    const { loading, images, showBtn } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit} />
        {images.length > 0 && (
          <ImageGallery
            images={this.state.images}
            page={this.state.page}
            valueQuery={this.state.valueQuery}
          />
        )}
        {loading && <Loader />}
        {showBtn && <ButtonLoadMore onClick={this.handleMoreImage} />}
        <ToastContainer />
      </div>
    );
  }
}
