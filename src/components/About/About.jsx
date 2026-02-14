function About() {
    return (
        <>
            <h1 className="about-heading">About My <span>Journey</span></h1>
            <section className="about-container">

                <div className="about-education">
                    <h1><span></span>Education Background</h1>
                    <span className="circle"></span>
                    <span className="height"></span>
                    <div className="education">
                        <h3>Frontend Specialization & Modern Web  <p>Development</p></h3>
                        <div><i class="bi bi-geo-alt"></i>Dedicated full-time effort to mastering modern technologies with <div>professionall coding standerds.</div> </div>
                        <p className="time">2025 - Present</p>
                    </div>

                    <span className="circle"></span>
                    <span className="height"></span>
                    <div className="education">
                        <h3>Periyar University, Salem</h3>
                        <div><i class="bi bi-geo-alt"></i>Bachelor of Science in Computer Science &#40; B.Sc CS &#41;
                        </div>                <p className="time">2022 - 2025</p>
                    </div>

                    <span className="circle"></span>
                    <span className="height"></span>
                    <div className="education">
                        <h3>GHSS</h3>
                        <div><i class="bi bi-geo-alt"></i>Higher Secondary Certivate</div>
                        <p className="time">End in 2021</p>
                    </div>
                </div>

                <div className="about-philosophy">
                    <h1>My Development Philosophy</h1>
                    <ul>
                        <li>
                            &bull; <span>Python, Django, SQL</span>
                            Building secure and scalable backend systems with clean architecture. I focus on efficient database design, optimized queries, and reliable RESTful APIs to support real-world web applications.
                        </li>

                        <li>
                            &bull; <span>JavaScript, React</span>
                            Creating dynamic, responsive, and user-friendly frontend experiences. I design reusable components and ensure smooth data flow between frontend and backend for high performance.
                        </li>

                        <li>
                            &bull; <span>HTML, CSS, Bootstrap</span>
                            Crafting modern, mobile-first interfaces with clean layouts and consistent styling. I prioritize accessibility, responsiveness, and intuitive user experience across all devices.
                        </li>

                        <li>
                            &bull; <span>Authentication & Security</span>
                            Implementing secure user authentication, authorization, and data protection using Django’s built-in security features and best practices. I ensure safe handling of user data, form validation, and protection against common web vulnerabilities.
                        </li>

                        <li>
                            &bull; <span>Performance & Continuous Learning</span>
                            Focused on writing clean, optimized, and maintainable code while improving application performance. I actively learn new tools, best practices, and modern development approaches to grow as a reliable Python Full-Stack Developer.
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default About