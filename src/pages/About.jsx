import './css/About.css'
import about_img from '../assets/ccwl_about_page_header.png'
import Intro from '../components/Intro'
import ContactMe from '../components/ContactMe/ContactMe'

const About = () => {
  return (
    <div className="about_container">
      <div className="about_header service_header">
        <div className="about_header_left service_header_left">
          <div className="about_header_left_container service_header_left_container">
            <h1>Who we are</h1>
            <p>
              As professional accountants and bookkeepers in Edmonton AB, we are
              a customer focused team. We take time to understand clients’
              business, provide financial statements and analysis, provide tax
              and business solutions, and help clients set their objectives and
              growth plans.
            </p>
            <p>
              Our team brings many years of business and accounting experience
              to provide sound advisory services to businesses and individuals.
              We help our clients with accounting/bookkeeping, payroll, GST and
              tax computations and filing. We set up integrated accounting
              systems that suit client’s business and budget, and provide
              training and support of the system.
            </p>
          </div>
        </div>
        <div className="about_header_right service_header_right">
          <div className="about_header_right_img service_header_right_img">
            <img src={about_img} alt="" />
          </div>
        </div>
      </div>
      <div className="about_intro service_intro">
        <p>
          Over the years, we have had the privilege of providing serving and
          advice to a wide range of businesses, professionals and individuals,
          such as manufacturing, restaurants ( franchise and non-franchise),
          design and construction, real estate, communication, industry,
          contractors, medical practitioners, and retailers.
        </p>
      </div>
      <Intro />
      <ContactMe />
    </div>
  )
}

export default About
