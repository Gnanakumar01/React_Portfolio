function Home() {
    return (
        <>
            <section className="home-container">
                <div className="home-left">
                    <p id="role">Frontend/Python Full Stack <span>&lt;/&gt;</span></p>

                    <h1>Hi I'm <span className="name">Gnanakumar</span>,
                        <p>a Full Stack | Developer </p></h1>

                    <div id="text">
                        <p>I build high-perfomance, web applications with react.js and Javascript. </p>
                        <p>Loremipsum, dolor sit amet consectetur adipisicing elit. </p>
                        <p>Boremnipvs um dolorsitam etconse cteturadipi sicingelit. </p>
                        <p>Torem ipsumd olorsit amet.</p>
                    </div>

                    <div className="contact-me">
                        <button>Check portfolio</button>
                        <button>Contact Me</button>
                    </div>

                </div>

                <div className="home-right">
                    <img className="profile-img" src="/images/home/profile.png" alt="Gnanakumar" />
                </div>

            </section>
        </>
    )
}

export default Home