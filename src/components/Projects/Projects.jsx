function Project() {
    return (
        <>
            <section id="Projects" className="project-container">

                <h1>Projects</h1>

                <div className="project-sub-container">
                    <div className="project-card">
                        <img className="img-overlay" src="/images/projects/currency.jpeg" alt="" />
                        <h2>Currency Converter</h2>
                        <p>Developed a responsive Currency Converter application using React.js that allows users to
                             convert amounts between different international currencies in real time.</p>
                        <div className="project-buttons-container">
                            <a href="https://currency-converter-virid-mu.vercel.app/" target="_blank"><button>Live Link</button></a>
                            <a href="https://github.com/Gnanakumar01/Currency_Converter" target="_blank"><button>GitHub</button></a>
                        </div>
                    </div>

                    <div className="project-card">
                        <img src="/images/projects/movieWeb.png" alt=""/>
                        <h2>Movie Website</h2>
                        <p>Developed a responsive Movie Explorer web application using React.js that 
                            allows users to browse, search, and view details of movies in real time.</p>
                        <div className="project-buttons-container">
                            <a href="https://movie-ggq8.vercel.app/" target="_blank"><button>Live Link</button></a>
                            <a href="https://github.com/Gnanakumar01/movie" target="_blank"><button>GitHub</button></a>
                        </div>
                    </div>

                     <div className="project-card">
                        <img src="/images/projects/shop now.png" alt="" />
                        <h2>E-commarce</h2>
                        <p>Developed a full-stack E-Commerce web application using Django that allows 
                            users to browse products, add items to cart, and securely place orders.</p>
                        <div className="project-buttons-container">
                            <a href="https://e-commerce-94xv.vercel.app/" target="_blank"><button>Live Link</button></a>
                            <a href="https://github.com/Gnanakumar01/E_commerce" target="_blank"><button>GitHub</button></a>
                        </div>
                    </div>

                      {/* <div className="project-card">
                        <img src="/images/projects/shop now.png" alt="" />
                        <h2>Instagram Clone</h2>
                        <p>Developed a full-stack E-Commerce web application using Django that allows 
                            users to browse products, add items to cart, and securely place orders.</p>
                        <div className="project-buttons-container">
                            <a href=""><button>Live Link</button></a>
                            <a href=""><button>GitHub</button></a>
                        </div>
                    </div> */}
                </div>

            </section>
        </>
    )
}

export default Project