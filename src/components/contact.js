import ContactForm from './contactForm';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faDownLong } from '@fortawesome/free-solid-svg-icons'

const githubIcon = <FontAwesomeIcon icon={faGithub} size="xl"/>
const mailIcon = <FontAwesomeIcon icon={faEnvelope} size="xl"/>
const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} size="xl"/>
const twitterIcon = <FontAwesomeIcon icon={faTwitter} size="xl"/>
const downIcon = <FontAwesomeIcon icon={faDownLong} size="xl"/>

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <h2 className="text-center fw-bold">Contacts</h2>
            <ul className='list-unstyled d-flex flex-column align-items-center my-5 ps-lg-4'>
              <li><a href='https://github.com/FrancescoCollotto' target="_blank" rel="noreferrer" className='link'><i>{githubIcon}</i> Github</a></li>
              <li><a href='mailto:francescocollotto@gmail.com' target="_blank" rel="noreferrer" className='link'><i>{mailIcon}</i> Email</a></li>
              <li><a href='https://www.linkedin.com/in/francesco-collotto-a1a544232' target="_blank" rel="noreferrer" className='link'><i>{linkedinIcon}</i> Linkedin</a></li>
              <li><a href='https://twitter.com/FranceCollo' target="_blank" rel="noreferrer" className='link'><i>{twitterIcon}</i> Twitter</a></li>
            </ul>
          </div>
          <div className='col-12 col-md-6'>
            <h2 className="text-center fw-bold">Drop a message</h2>
            <ContactForm downIcon={downIcon}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;