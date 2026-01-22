import "./Projects.css"

function Projects(){
    return(
        <div>
            <div id="projects" className="Pro-container">
                <h1>Projects</h1>
                    <h3>PMS - Placement Management System</h3>
                    <p>Created individual dashboards for students to 
                        receive real-time updates from the placement
                        cell and built an admin panel to manage
                        student data with filtering based on
                        eligibility, skills, andacademic criteria.
                    </p>
                    <div>
                        <strong>Tech Stack:</strong> React.js, Node.js, Express.js, PostgreSQL.
                    </div>
                    <h3>Wealth Building</h3>
                    <span>[In Progress]</span>
                    <p>To analyze the price of Stocks ,Gold and Mutual Funds
                         using <strong>Python</strong> and <strong>ReactJS</strong>.
                    </p>
                
            </div>
        </div>
    );
}

export default Projects;