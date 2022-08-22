import { Link } from 'react-router-dom'
import './css/Services.css'

const Services = ({ services }) => {
  return (
    <div className="services">
      <div className="services_container">
        <h1>Our Services</h1>
        <div className="services_items">
          {services.map((item) => {
            const { id, title, intro } = item
            return (
              <Link to={`/${id}`} key={id}>
                <div className="services_item">
                  <div className="services_item_content">
                    <h2>{title}</h2>
                    <p>{intro}</p>
                  </div>
                  <div className="services_item_bottom">
                    <h3>Learn More</h3>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Services
