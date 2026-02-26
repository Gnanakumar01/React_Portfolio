function Skills() {
    return (
        <>
            <section id="Skills" className="skills-container">
                <div className="skill-heading">
                    <h1>Explore My <span>Skills</span></h1>
                    <p id="sub-head">Technologies that power my fronted developmebt toolkit</p>
                </div>
                <div className="tech-container">
                    <div className="tech-sub-container">
                        <div>
                            <h3>FrontEnd Architecture & UI</h3>
                            <p>Technologies for building type-safe, responsive, and high-perfomance user interfaces,</p>
                        </div>
                        <div className="tech-logos-container">
                            <img src="/images/skills/html.png"
                                className="tech-img" alt="hml" id="html" title="Html"/> 

                            <img src="/images/skills/css-3.png" alt="css3"
                                className="tech-img" id="css3" title="CSS3" />

                            <img src="/images/skills/bootstrap.png" alt="Bootstrap"
                                className="tech-img" id="bootstrap" title="Bootstrap" />

                            <img src="/images/skills/js.png" alt="JavaScript"
                                className="tech-img" id="javascript" title="JavaScript"/>

                            <img src="/images/skills/react.svg" alt="React"
                                className="tech-img" id="react" title="React"/>
                        </div>
                    </div>

                    <div className="tech-sub-container">
                        <div>
                            <h3>Python Full Stack & Security</h3>
                            <p>Server-side security technologies for full-stack capability.</p>
                        </div>

                        <div className="tech-logos-container">
                            <img src="/images/skills/python.png" alt="Python" className="tech-img" 
                            id="python" title="Python"/>
                            <img src="/images/skills/django.png" alt="Django" 
                            className="tech-img" id="django" title="Django" />
                            <img src="/images/skills/database.png" alt="SQL" 
                            className="tech-img" id="sql" title="SQL" />
                        </div>
                    </div>

                    <div className="tech-sub-container">
                        <div>
                            <h3>Tools & Prefessional Worlflow</h3>
                            <p>Complementry tools and platforms for codd quality and collaboration.</p>
                        </div>

                        <div className="tech-logos-container">
                            <img src="/images/skills/git.svg" alt="Git" 
                            className="tech-img" id="git" title="Git"/>
                            <img src="/images/skills/github-original.svg" alt="GitHub" 
                            className="tech-img" id="github" title="GitHub"/>
                            <img src="/images/skills/mysql.png" alt="Mysql" 
                            className="tech-img" id="mysql" title="Mysql"/>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Skills 