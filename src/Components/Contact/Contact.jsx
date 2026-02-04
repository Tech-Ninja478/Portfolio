import React, { useState, useRef } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
    const formRef = useRef(null);
    const [status, setStatus] = useState("EXECUTE_SEND");
    const [isSending, setIsSending] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSending(true);
        setStatus("UPLOADING...");
        
        const formData = new FormData(event.target);
        formData.append("access_key", "f9ee2044-f3a4-4862-bb58-b906fe462a63");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: json
            }).then((res) => res.json());

            if (res.success) {
                setStatus("DATA_RECEIVED");
                formRef.current.reset();
                setTimeout(() => {
                    setStatus("EXECUTE_SEND");
                    setIsSending(false);
                }, 3000);
            }
        } catch (error) {
            setStatus("SYSTEM_ERROR");
            setIsSending(false);
        }
    };

    return (
        <div id='contact' className='contact reveal'>
            {/* AMBIENT BACKGROUND PARTICLES */}
            <div className="contact-bg-stream">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className={`packet p${i}`}>✉️</div>
                ))}
            </div>

            <div className='contact-title'>
                <h1>Contact Me</h1>
            </div>

            <div className="contact-wide-container">
                {/* LEFT SIDE: SYSTEM INFO */}
                <div className="contact-left-tech">
                    <h1 className="cyber-header">Get In Touch</h1>
                    <p className="cyber-desc">
                        Initialize a connection to discuss backend architectures, ML integrations, or potential collaborations.
                    </p>

                    <div className="contact-nodes">
                        <div className="node-item">
                            <div className="node-icon"><img src={mail_icon} alt="mail" /></div>
                            <div className="node-text">
                                <label>NODE_MAIL</label>
                                <p>dcadityapachpute@gmail.com</p>
                            </div>
                        </div>
                        <div className="node-item">
                            <div className="node-icon"><img src={call_icon} alt="call" /></div>
                            <div className="node-text">
                                <label>NODE_COMM</label>
                                <p>+91 80079 06906</p>
                            </div>
                        </div>
                        <div className="node-item">
                            <div className="node-icon"><img src={location_icon} alt="location" /></div>
                            <div className="node-text">
                                <label>NODE_GPS</label>
                                <p>Mumbai, MH, IN</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE: TERMINAL FORM */}
                <form ref={formRef} onSubmit={onSubmit} className='contact-right-terminal'>
                    <div className="terminal-header-strip">
                        <div className="terminal-dots"><span></span><span></span><span></span></div>
                        <p>Contact Here</p>
                    </div>

                    <div className="terminal-form-body">
                        <div className="terminal-row">
                            <div className="terminal-group">
                                <label>&gt; USER_IDENTIFIER</label>
                                <input type="text" placeholder='Enter ID' name='name' required />
                            </div>
                            <div className="terminal-group">
                                <label>&gt; SOURCE_ADDRESS</label>
                                <input type="email" placeholder='name@server.com' name='email' required />
                            </div>
                        </div>
                        <div className="terminal-group">
                            <label>&gt; PAYLOAD_BODY</label>
                            <textarea name="message" rows="8" placeholder='Write message details...' required></textarea>
                        </div>
                        <button 
                            type='submit' 
                            className={`terminal-btn ${isSending ? 'executing' : ''}`}
                            disabled={isSending}
                        >
                            {status}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact