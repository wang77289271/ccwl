import './css/NavMobile.css'
import MenuIcon from '@mui/icons-material/Menu'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'

import { useState } from 'react'
import { Link } from 'react-router-dom'

const NavMobile = ({ logoImg, services }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="nav_mobile">
      <div className="nav_mobile_left">
        <img src={logoImg} alt="" />
      </div>
      <div className="nav_mobile_right">
        {!isOpen ? (
          <MenuIcon
            className="nav_mobile_icon"
            onClick={handleClick}
            style={{
              fontSize: '38px',
            }}
          />
        ) : (
          <CloseOutlinedIcon
            className="nav_mobile_icon"
            onClick={handleClick}
            style={{
              fontSize: '38px',
            }}
          />
        )}
      </div>
      {isOpen && (
        <div className="nav_mobile_menu">
          <Link
            to={'/'}
            onClick={() => {
              setIsOpen(false)
            }}
          >
            Home
          </Link>
          <Link
            to={'/about'}
            onClick={() => {
              setIsOpen(false)
            }}
          >
            About
          </Link>
          <p>Services</p>
          <div className="services_mobile">
            {services.map((service) => (
              <Link
                to={`/${service.id}`}
                key={service.id}
                onClick={() => {
                  setIsOpen(false)
                }}
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default NavMobile
