import './css/Footer.css'
import ccwl_logo_white from '../assets/ccwl_logo_white.png'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { Link } from 'react-router-dom'

const Footer = ({ services }) => {
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="footer_logo">
          <img src={ccwl_logo_white} alt="CCWL Accounting" />
        </div>
        <div className="footer_map">
          <h1>About CCWL</h1>
          <div className="footer_map_detail">
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <a href="#contactme">Contact Us</a>
          </div>
        </div>
        <div className="footer_map">
          <h1>Services</h1>
          <div className="footer_map_detail">
            {services.map((service) => (
              <Link to={`/${service.id}`} key={service.id}>
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="footer_map">
          <h1>Contact</h1>
          <div className="footer_map_detail">
            <div className="footer_contact">
              <EmailOutlinedIcon
                style={{
                  fontSize: '20px',
                }}
              />
              <p>info@ccwlaccounting.ca</p>
            </div>
            <div className="footer_contact">
              <LocalPhoneIcon
                style={{
                  fontSize: '20px',
                }}
              />
              <p>(780) 710-7688</p>
            </div>
            <div className="footer_contact">
              <LocationOnIcon
                style={{
                  fontSize: '20px',
                }}
              />
              <p>8522 Davis Road NW, Edmonton AB, T6E 4Y5</p>
            </div>
          </div>
        </div>
      </div>
      <h5>
        Copyright &copy; 2022 CCWL Accounting & Tax Services. All right Reserved
      </h5>
    </div>
  )
}

export default Footer
