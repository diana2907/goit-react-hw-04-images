import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { ButtonLoadMore } from './ButtonLoadMore/ButtonLoadMore';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { SearchBar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    valueQuery: '',
    page: 1,
  };

  handleMoreImage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleFormSubmit = valueQuery => {
    this.setState({ valueQuery, page: 1 });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          page={this.state.page}
          valueQuery={this.state.valueQuery}
        />
        <Loader />
        <ButtonLoadMore onClick={this.handleMoreImage} />
        <ToastContainer />
      </div>
    );
  }
}
