import './css/HeaderHome.css'
import home_header_img from '../assets/home_header_bg.png'
import home_header_img_mobile from '../assets/home_header_mobile.png'

const HeaderHome = () => {
  return (
    <div className="header_home_container">
      <div className="header_home_left">
        <div className="header_home_left_container">
          <div className="header_home_left_content">
            <h1>CCWL Accounting & Tax Services</h1>
            <h2>Advice, Tax Savings & Accurate Accounting</h2>
          </div>
          <div className="header_home_left_btn">
            <a href="#intro">Find Out More</a>
          </div>
        </div>
      </div>
      <div className="header_home_right">
        <div className="header_home_right_img">
          <img
            className="home_header_img"
            src={home_header_img}
            alt="CCWL Accounting"
          />
          <img
            className="home_header_img_mobile"
            src={home_header_img_mobile}
            alt="ccwl accounting"
          />
        </div>
      </div>
    </div>
  )
}

export default HeaderHome
