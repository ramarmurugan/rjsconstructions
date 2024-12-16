import { Link } from 'react-router-dom';
// Images
// Components
import Map from '../../Parts/Map/Map';
import ScrollUp from '../../Components/Scroll-Up/Scroll-Up';
// Css
import './Footer.css';


function Footer() {
  return (
    <footer className='footer'>
      <div className='container container-lg parent-items'>
        {/* item 01 */}
        <div className='footer-item'>
          

          <p>We are specialists in the construction of unique and exclusive properties. Our work inspires. We pride ourselves on delivering outstanding quality and design for leading clients across the world.</p>

          <Link to='/about' className='btn btn-primary'>learn more</Link>
        </div>

        

        {/* item 03 */}
        <section className='footer-item'>
          <h3 className='title-sm'>contact us today</h3>

          <ul className='list'>
            <li className='list-item'>
              <i className='list-icon icon-globe'></i>
              <p>our location<br/>8/937 A Mumoorthi Nagar PN Road, Pooluvapatti, Po<br/>Tiruppur, Tamil Nadu 641602</p>                         
            </li>

            <li className='list-item'>
              <i className='list-icon icon-phone'></i>
              <p>
                <a href='/' className='text-link'>+91 9942141554</a> 
              </p>
            </li>

            <li className='list-item'>
              <i className='list-icon icon-email'></i>
              <a href='mailto:mailto:info@your-domain.com' className='text-link'>info@your-domain.com</a>
            </li>

            <li className='list-item'>
              <i className='list-icon icon-clock'></i>
              <p>monday - saturday: 10:00 AM - 6:00 PM</p>
            </li>

          </ul>
        </section>

        {/* item 04 */}
        <section className='footer-item'>
          <h3 className='title-sm'>our location</h3>

          <Map/>
        </section>
      </div>

   

      {/* scroll up page */}
      <ScrollUp/>
    </footer>
  );
}

export default Footer;