import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { ButtonLoadMore } from './ButtonLoadMore/ButtonLoadMore';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    valueQuery: '',
    page: 0,
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
        {this.state.page > 0 && (
          <ButtonLoadMore onClick={this.handleMoreImage} />
        )}

        <ToastContainer />
      </div>
    );
  }
}
