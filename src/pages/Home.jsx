import Aboutus from '../components/Aboutus'
import Banner from '../components/Banner'
import ContactMe from '../components/ContactMe/ContactMe'
import HeaderHome from '../components/HeaderHome'
import Intro from '../components/Intro'
import Services from '../components/Services'
import './css/Home.css'

const Home = ({ services }) => {
  return (
    <div id="home" className="home">
      <HeaderHome />
      <Intro />
      <Services services={services} />
      <Banner />
      <Aboutus />
      <ContactMe />
    </div>
  )
}

export default Home
