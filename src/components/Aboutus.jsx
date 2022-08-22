import './css/Aboutus.css'
import aboutus_img from '../assets/whyus.png'

const Aboutus = () => {
  return (
    <div className="aboutus_home">
      <div className="aboutus_home_container">
        <div className="aboutus_home_left">
          <div className="aboutus_home_content">
            <h1>Why choose us</h1>
            <p>
              Our team brings many years of business and accounting experience
              to provide sound advisory services to businesses and individuals.
              We help our clients with accounting/bookkeeping, payroll, GST and
              tax computations and filing. We set up integrated accounting
              systems that suit client’s business and budget, and provide
              training and support of the system.
            </p>
            <p>
              Over the years, we have had the privilege of providing serving and
              advice to a wide range of businesses, professionals and
              individuals, such as manufacturing, restaurants ( franchise and
              non-franchise), design and construction, real estate,
              communication, industry, contractors, medical practitioners, and
              retailers.
            </p>
          </div>
          <div className="aboutus_home_btn">
            <a href="#contactme">Schedule a free chat with us</a>
          </div>
        </div>
        <div className="aboutus_home_right">
          <div className="aboutus_home_img">
            <img src={aboutus_img} alt="Why choose us" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutus
