import './css/Banner.css'
import bannerImg from '../assets/bookConsultation.png'

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner_container">
        <div className="banner_left">
          <h1>Looking for a reliable accounting firm?</h1>
          <div className="banner_btn">
            <button>Book a free consultation</button>
          </div>
        </div>
        <div className="banner_right">
          <div className="banner_img">
            <img src={bannerImg} alt="CCWL Accounting" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
