import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';

const heartIcon = <FontAwesomeIcon icon={faHeart} className='heart-icon' />
const reactIcon = <FontAwesomeIcon icon={faReact} className='react-icon' />
const year = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="bg-dark d-flex flex-wrap text-light justify-content-between p-2">
      <p className='m-0'>Made With <i>{heartIcon}</i> Using <span className='fw-bold'>React</span><i>{reactIcon}</i></p>
      <p className='m-0'>Francesco Collotto - <span>{year}</span></p>
    </div>
  )
}

export default Footer;