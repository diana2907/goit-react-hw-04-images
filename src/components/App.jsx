import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from 'components/FetchImages/FetchImages';
import { Loader } from 'components/Loader/Loader';
import { ButtonLoadMore } from 'components/ButtonLoadMore/ButtonLoadMore';
import { ToastContainer } from 'react-toastify';
import { useState, useEffect } from 'react';

export function App() {
  const [valueQuery, setValueQuery] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    if (page) {
      setLoading(true);
      fetchImages(valueQuery, page).then(image => {
        const imageArr = image.data.hits;
        setImages(prevState => [...prevState, ...imageArr]);
        if (page < image.data.totalHits / 12) {
          setShowBtn(true);
        } else {
          setShowBtn(false);
        }
        setLoading(false);
      });
    }
  }, [valueQuery, page]);

  const handleMoreImage = () => {
    setPage(prevState => prevState + 1);
  };

  const handleFormSubmit = valueQuery => {
    setValueQuery(valueQuery);
    setImages([]);
    setPage(1);
    setLoading(false);
    setShowBtn(false);
  };

  return (
    <div>
      <SearchBar onSubmit={handleFormSubmit} />
      {images.length > 0 && (
        <ImageGallery images={images} page={page} valueQuery={valueQuery} />
      )}
      {loading && <Loader />}
      {showBtn && <ButtonLoadMore onClick={handleMoreImage} />}
      <ToastContainer />
    </div>
  );
}
