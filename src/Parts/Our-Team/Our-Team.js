// Components
import HedSection from '../../Components/Hed-Section/Hed-Section';
import SocialMedia from '../../Components/Social-Media/Social-Media';
// Css
import './Our-Team.css';

// Fake Server
const data = [
    
];

function OurTeam() {
  return (
    <div className='our-team parent-semicircular'>
      {/* semicircular */}
      <div className='semicircular'></div>

      <div className='container'>
        <HedSection
          title='Our Expertise'
          content='At RJS, we specialize in a wide range of construction services, from ground-up builds to extensive renovations. We work with both individuals and businesses to create functional, beautiful spaces that stand the test of time.

          Our services include:
          
            *Residential Construction: Custom homes, remodels, and additions tailored to your lifestyle.
            *Commercial Construction: Office buildings, retail spaces, and industrial complexes that meet your business needs.
            *Project Management: Full project oversight from planning to completion, ensuring everything runs smoothly and on time.
          Whether it’s a dream home, office, or large-scale commercial project, we have the expertise to bring it to life.'
        />

        <div className='parent-items'>
          {data.map(item => {
            const {id,image,alt,name,job,facebook,twitter,instagram,content} = item;

            return (
              <section key={id} className='Person-Card'>
                <div className='parent-img'>
                  <img src={image} alt={alt} className='card-img'/>
                </div>

                <div className='card-content'>
                  <h3 className='title-md'>{name}</h3>
                  <h3 className='title-md'>{job}</h3>

                  <nav className='card-social'>
                    <SocialMedia
                      url={`https://m.facebook.com/${facebook}`}
                      className='card-social-icon'
                      tooltip='facebook'
                      icon='icon-facebook'
                    />
                    
                    <SocialMedia
                      url={`https://www.Twitter.com/${twitter}`}
                      className='card-social-icon'
                      tooltip='twitter'
                      icon='icon-twitter'
                    />
                    
                    <SocialMedia
                      url={`https://www.instagram.com/${instagram}`}
                      className='card-social-icon'
                      tooltip='instagram'
                      icon='icon-instagram'
                    />
                  </nav>

                  <p>{content}</p>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;