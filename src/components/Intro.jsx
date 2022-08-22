import './css/Intro.css'
import intro_img from '../assets/clientImg.png'

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="intro_container">
        <div className="intro_left">
          <div className="intro_img">
            <img src={intro_img} alt="CCWL Accounting" />
          </div>
        </div>
        <div className="intro_right">
          <div className="intro_content">
            <h4>Your business is unique - we get that</h4>
            <h1>
              As Professional Accountants and Bookkeepers We are a customer
              focused team
            </h1>
            <hr />
            <p>
              Our experienced team provides innovative services at affordable
              rates, customized to meet each client’s needs. In order to
              maximize business value, we are committed to building strong,
              long-term, strategic relationships with all of our clients.
            </p>
            <ul>
              <li>Understand clients’ business</li>
              <li>Provide financial statements and analysis</li>
              <li>Provide tax and business solutions</li>
              <li>Help clients set their objectives and growth plans</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
