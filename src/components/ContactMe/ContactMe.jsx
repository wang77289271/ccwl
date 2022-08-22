import ContactForm from './ContactForm'
import './ContactMe.css'

const ContactMe = () => {
  return (
    <div className="contactme" id="contactme">
      <div className="contactme_container">
        <div className="contactme_left">
          <div className="contactme_left_content">
            <h1>Contact Us</h1>
            <p>
              Need to get in touch with us? Either fill out the form with your
              inquiry or contact us via{'  '}
              <a href="mailto:info@ccwlaccounting.ca">our email</a> or give us a
              call at (780) 710-7688
            </p>
          </div>
        </div>
        <div className="contactme_right">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default ContactMe
