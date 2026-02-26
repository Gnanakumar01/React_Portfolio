function Contact() {
    return (
        <>
            <div id="Contact" className="contact-container">
                <div className="heading">
                    <h1>Get In Touch</h1>
                    <p>Let’s connect—feel free to reach out for collaborations,
                        opportunities, or just a friendly chat</p>
                </div>

                <div className="contact-info">
                    <div className="input-container">
                        <form>
                            <h2>Send a Message</h2>
                            <input type="text" placeholder="Your Name" />
                            <input type="email" placeholder="Your Email" />
                            <input type="text" placeholder="Subject" />
                            <textarea placeholder="Your Message"></textarea>
                            <button>Send Message <i class="bi bi-arrow-right"></i></button>
                        </form>
                    </div>

                    <div className="address-container">
                        <div className="sub-address-container">
                            <div className="each-address">
                                <div className="address-icons">
                                    <i class="bi bi-envelope"></i>
                                </div>
                                <div className="email-container">
                                    <h4>EMAIL</h4>
                                    <a href="">sgnanakumar929@gmail.com</a>
                                </div>
                            </div>

                            <div className="each-address">
                                <div className="address-icons">
                                    <i class="bi bi-telephone"></i>
                                </div>
                                <div className="phone-container">
                                    <h4>PHONE</h4>
                                    <a href="">+91-8098013644</a>
                                </div>
                            </div>

                            <div className="each-address">
                                <div className="address-icons">
                                    <i class="bi bi-geo-alt"></i>
                                </div>
                                <div className="email-container">
                                    <h4>LOCATION</h4>
                                    <p>BTM Layout, Bengaluru, Karnataka</p>
                                </div>
                            </div>
                        </div>

                        <div className="map">
                            <iframe
                                src="https://maps.google.com/maps?q=BTM+Layout+Bengaluru&output=embed"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact