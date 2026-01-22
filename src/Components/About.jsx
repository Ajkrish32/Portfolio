import "./About.css";

function About(){
    return(
        <div>
            <div id="about" className="abt-container">
                <h1>About</h1>
                <p> I am skilled in creating responsive and
                    user-centric web applications using MongoDB,
                    Express.js, React, and Node.js.I'm a passionate 
                    frontend developer using the React library, I enjoy the process
                    of bringing ideas to life from conception to
                    deployment.</p>
                <h1>Educational Qualification</h1>
                <div className="edu-section">
                    <div>Coimbatore Institute of Engineering and Technology BE in Computer Science</div>
                    <div> CGPA: 7.67 (Till 6th SEM)</div>
                    <div>Balakrishna Matric HR Sec School</div>
                    <div>HSC: 86.83% (April 2021)</div>
                    <div>Balakrishna Matric HR Sec School</div>
                    <div>SSLC: 85.60% (April 2019)</div>
                </div>
                <h1>Certifications</h1>
                <div className="cert-section"><strong></strong>
                    <div><strong>ReactJS</strong> -JclickSolutions</div>
                    <div><strong>Database Management System</strong> -NPTEL</div>
                    <div><strong>Python</strong> -Networkz Systems</div>
                    <div><strong>Python for Data Science</strong> -NPTEL</div>
                </div>    
            </div>
        </div>
    );
}

export default About;