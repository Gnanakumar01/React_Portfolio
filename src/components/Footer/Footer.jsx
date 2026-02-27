function Footer() {
    return (
        <>
            <hr />
            <section className="footer-container">
                <div className="footer-top">
                    <div className="footer-left">
                        <h2>GNANAKUMAR</h2>
                        <p>FRONTEND DEVELOPER</p>
                    </div>

                    <div className="footer-center">
                        <p>Let's stand connected I post project, design exprements</p>
                        <div>

                            <a href=""><i class="bi bi-whatsapp"></i>
                                <span>+91 8098013644</span>
                            </a>
                            <a href=""><i class="bi bi-linkedin"></i>
                                <span>Gnanakumars</span>
                            </a>
                            <a href=""><i class="bi bi-github"></i>
                                <span>Gnanakumar01</span></a>
                        </div>
                    </div>

                    <div className="footer-right">
                        <p>Open to freelance, consulting, or just a tech chat over</p>
                        <button>Start a conversation<i class="bi bi-arrow-right"></i></button>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p><i class="bi bi-c-circle"></i> <span>Gnanakumar</span> Coded with intent, designed with care.</p>
                    <p>
                        <a href="#" className="pivacy-policy">Privacy Policy</a>
                        <a href="#" className="pivacy-policy">Terms of Sevice </a>
                        <a href="#" className="pivacy-policy">Cookie Preferences</a>
                    </p>
                </div>
            </section>
        </>
    )
}

export default Footer