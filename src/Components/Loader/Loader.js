import { useEffect, useState } from 'react';
// Images
import FooterLogo from '../../Assets/Images/RJS-Logo.png';
// Css
import './Loader.css';

function Loader() {
  const [load, setLoad] = useState();

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 500);
  }, []);

  return (
    <div className={`parent-loader ${(load ? 'hide' : '')}`}>
      <img src={FooterLogo} alt='website logo' title='loading' className='loader-img'/>
      <div className='loader'></div>
    </div>
  );
}

export default Loader;