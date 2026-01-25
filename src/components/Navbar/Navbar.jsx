function Navbar() {
    return (
        <>
            <div className="navbar-container">
                <h2>
                    <span className="brace">&#123; </span> 
                    Gnanakumar
                    <span className="brace"> &#125;</span>
                </h2>

                <ul className="links">
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                </ul>

                <div className="resume-theme">
                    <button>Resume <i class="bi bi-download"></i></button>
                    <p><i class="bi bi-moon-fill"></i></p>
                </div>
            </div>

        </>
    )
}

export default Navbar