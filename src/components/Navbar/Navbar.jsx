import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <div className="navbar-container">
            <h2>
                <span className="brace">&#123; </span>
                Gnanakumar
                <span className="brace"> &#125;</span>
            </h2>

            <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "✖" : "☰"}
            </div>

            <ul className={`links ${isOpen ? "active" : ""}`}>
                <a href="#"><li>Home</li></a>
                <a href="#About"><li>About</li></a>
                <a href="#Skills"><li>Skills</li></a>
                <a href="#Projects"><li>Projects</li></a>
                <a href="#Contact"><li>Contact</li></a>
            </ul>

            <div className="resume-theme">
            
                <button onClick={() => window.open("/public/Gnanakumar_Resume1.pdf", "_blank")}>
                    Resume <i className="bi bi-download"></i>
                </button>
                <p onClick={() => setDarkMode(!darkMode)} style={{ cursor: "pointer" }}>
                    <i className={darkMode ? "bi bi-sun-fill" : "bi bi-moon-fill"}></i>
                </p>
            </div>
        </div>
    );
};

export default Navbar;