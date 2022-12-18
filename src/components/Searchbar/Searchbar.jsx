import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from 'components/Searchbar/SearchBar.module.css';
import { useState } from 'react';

export function SearchBar({ onSubmit }) {
  const [value, setValue] = useState('');

  const changeInput = evt => {
    setValue(evt.currentTarget.value.toLowerCase());
  };

  const submitForm = evt => {
    evt.preventDefault();

    if (value.trim() === '') {
      toast.info('You entered an empty  string', { theme: 'colored' });
      return;
    }
    onSubmit(value);
    setValue('');
  };

  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={submitForm}>
        <input
          onChange={changeInput}
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
