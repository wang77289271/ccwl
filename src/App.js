import './App.css'
import Home from './pages/Home'
import { services } from './data'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Service from './pages/Service'
import About from './pages/About'
import ScrollToTop from './helpers/ScrollToTop'

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Nav services={services} />
        <Routes>
          <Route path="/" element={<Home services={services} />} />
          <Route path="/:id" element={<Service services={services} />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer services={services} />
      </Router>
    </div>
  )
}

export default App
