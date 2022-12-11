import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from 'components/Searchbar/SearchBar.module.css';

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
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.submitForm}>
          <input
            onChange={this.changeInput}
            className={css.input}
            type="text"
            placeholder="Search images and photos"
          />
          <button type="submit" className={css.button}>
            <span className="button-label">Search</span>
          </button>
        </form>
      </header>
    );
  }
}
