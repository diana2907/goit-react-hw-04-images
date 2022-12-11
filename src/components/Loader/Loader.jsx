import { Vortex } from 'react-loader-spinner';
import css from 'components/Loader/Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.box}>
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
    </div>
  );
};
