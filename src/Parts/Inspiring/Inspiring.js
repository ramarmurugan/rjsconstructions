// Images
import Materials from '../../Assets/Images/Materials.webp';
// Components
import HedSection from '../../Components/Hed-Section/Hed-Section';
// Css
import './Inspiring.css';

function Inspiring() {
  return (
    <div className='inspiring'>
      <div className='container'>
        <HedSection
          title='building inspiring spaces'
          content='The quick embrace of serenity is the foundation of enduring connections. Cultivate the flame of trust and the bond grows stronger.'
        />

        <img src={Materials} alt='Construction Materials' className='inspiring-img'/>
      </div>
    </div>
  );
}

export default Inspiring;