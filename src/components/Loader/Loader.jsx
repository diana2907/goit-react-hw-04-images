import { Vortex } from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export const Loader = () => {
  return (
    <Vortex
      visible={true}
      height="80"
      width="80"
      ariaLabel="vortex-loading"
      wrapperClass="vortex-wrapper"
      colors={[
        'lightgreen',
        'green',
        'lightgreen',
        'green',
        'green',
        'lightgreen',
      ]}
    />
  );
};
