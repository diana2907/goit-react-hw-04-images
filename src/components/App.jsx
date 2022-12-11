import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
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
    console.log(this.props.images);
    this.setState({ valueQuery, page: 1 });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          page={this.state.page}
          valueQuery={this.state.valueQuery}
          onClick={this.handleMoreImage}
        />
        <ToastContainer />
      </div>
    );
  }
}
