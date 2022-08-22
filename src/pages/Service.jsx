import './css/Service.css'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'
import ContactMe from '../components/ContactMe/ContactMe'
import { useParams } from 'react-router-dom'

const Service = ({ services }) => {
  const { id } = useParams()
  const service = services.filter((x) => x.id === id)
  if (!service) {
    return 'Loading...'
  }
  return (
    <div className="service">
      <div className="service_header">
        <div className="service_header_left">
          <div className="service_header_left_container">
            <h1>{service[0].title}</h1>
            {service[0].des.split('.').map((item, index) => (
              <p key={index}>
                <ArrowForwardIosOutlinedIcon
                  className="header_arrow_icon"
                  style={{
                    fontSize: '18px',
                    marginRight: '8px',
                    color: 'var(--text-logo-light-color)',
                  }}
                />{' '}
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="service_header_right">
          <div className="service_header_right_img">
            <img src={service[0].img} alt="" />
          </div>
        </div>
      </div>
      <div className="service_intro">
        <p>
          Our experienced team provides innovative services at affordable rates,
          customized to meet each client’s needs. In order to maximize business
          value, CCWL Accounting & Tax Services is committed to building strong,
          long-term, strategic relationships with all of our clients.
        </p>
      </div>
      <ContactMe />
    </div>
  )
}

export default Service
