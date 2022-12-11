import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class SearchBar extends Component {
  state = {
    value: '',
  };

  changeInput = evt => {
    this.setState({ value: evt.currentTarget.value.toLowerCase() });
  };

  submitForm = evt => {
    evt.preventDefault();

    if (this.state.value.trim() === '') {
      toast.info('You entered an empty  string', { theme: 'colored' });
      return;
    }
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.submitForm}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
          <input
            onChange={this.changeInput}
            className="input"
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
