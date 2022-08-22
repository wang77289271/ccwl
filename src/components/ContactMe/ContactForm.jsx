import { useState } from 'react'
import './ContactForm.css'
import emailjs from 'emailjs-com'

const ContactForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
  const userId = process.env.REACT_APP_EMAILJS_USER_ID

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(serviceId, templateId, e.target, userId).then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )
    setFirstName('')
    setLastName('')
    setEmail('')
    setPhone('')
    setMessage('')
  }

  return (
    <div className="contact_form">
      <form onSubmit={sendEmail}>
        <div className="form_info">
          <div className="form_input">
            <label>
              First name<span>*</span>
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form_input">
            <label>Last name</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form_input">
            <label>
              Email<span>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form_input">
            <label>Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="form_input">
          <label>Service you are interested in</label>
          <div className="form_radio_container">
            <div className="form_radio">
              <input type="radio" name="services" value="Bookkeeping" />
              <label>Bookkeeping</label>
            </div>
            <div className="form_radio">
              <input type="radio" name="services" value="Personal Tax" />
              <label>Personal Tax</label>
            </div>
            <div className="form_radio">
              <input type="radio" name="services" value="Corporate Tax" />
              <label>Corporate Tax</label>
            </div>
            <div className="form_radio">
              <input type="radio" name="services" value="Other" />
              <label>Other</label>
            </div>
          </div>
        </div>
        <div className="form_input">
          <label>What can we help you with?</label>
          <textarea
            type="message"
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="form_btn">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
