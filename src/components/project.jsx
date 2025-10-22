import './project.css';

function Project({ project_name, link, description }) {
    return (
        <div className="projectContainer">
            <h2 className="projectName">{project_name}</h2>
            <a className="projectLink" href={link}>Github</a>
            <p className="projectDescription">{description}</p>
        </div>
    )
 }
 
 
 export default Project;
 