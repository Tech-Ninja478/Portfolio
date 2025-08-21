import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
    return (
        <div id='contact' className='contact'>
            <div className='contact-title'>
                <h1>Contact Me</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="contact-section">
                {/* LEFT SIDE */}
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>“I’d love to hear from you! Whether you have a question, a project idea, or simply want to connect, feel free to reach out. I’m always open to new opportunities, collaborations, or just a friendly chat — your message is only a click away.”</p>

                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>dcadityapachpute@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>+91 80079 06906</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /> <p>Mumbai, Maharashtra</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <form className='contact-right'>
                    <label>Your Name</label>
                    <input type="text" placeholder='Enter Your Name' name='name' />
                    <label>Your Email</label>
                    <input type="email" placeholder='Enter Your Email' name='email' />
                    <label>Drop Your Message</label>
                    <textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>
                    <button type='submit' className="contact-submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact