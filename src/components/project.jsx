function Project({ project_name, link, description }) {
    return (
        <div className="project">
            <h2>{project_name}</h2>
            <a href={link}>Github</a>
            <p>{description}</p>
        </div>
    )
 }
 
 
 export default Project;
 