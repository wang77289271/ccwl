import './css/Nav.css'
import ccwl_logo from '../assets/ccwl_logo.png'
import { Link } from 'react-router-dom'
import NavMobile from './NavMobile'

const Nav = ({ services }) => {
  return (
    <div id="nav" className="nav">
      <div className="nav_container">
        <div className="nav_logo">
          <img src={ccwl_logo} alt="CCWL Accounting" />
        </div>
        <div className="nav_bar">
          <Link to={'/'}>Home</Link>
          <Link to={'/about'}>About</Link>
          <div className="nav_services_dropdown">
            <p>Services</p>
            <div className="nav_service_item">
              {services.map((service) => (
                <Link to={`/${service.id}`} key={service.id}>
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="nav_contact">
          <a href="#contactme">Contact Us</a>
        </div>
      </div>
      <div className="nav_mobile_display">
        <NavMobile logoImg={ccwl_logo} services={services} />
      </div>
    </div>
  )
}

export default Nav
