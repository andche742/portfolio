import './project.css';

function Project({ project_name, link, description }) {
    return (
        <div className="projectContainer">
            <div className="projectHeader">
                <h2 className="projectName">{project_name}</h2>
                <a className="projectLink" href={link}>Github</a>
            </div>
            <p className="projectDescription">{description}</p>
        </div>
    )
}
 
 
 export default Project;
 