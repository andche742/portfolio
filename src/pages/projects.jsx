import './projects.css'
import Project from '../components/project';
import Nav from '../components/nav';

function Projects() {
  return (
    <div>
      <Nav showName={true}/>
      <Project project_name="Test" link="https://google.com" description="This is a test projec. Hello my name is andrew and ibuilt thisi using html and react and jsx and python. tensorflow ai something blahblahblahblht"/>
    </div>
 );
}


export default Projects;
