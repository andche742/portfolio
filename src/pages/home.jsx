import './home.css'
import Nav from '../components/nav';
import headshot from '../assets/headshot.png'

function Home() {
  return (
    <div>
      <Nav/>
      <div className="mainInfo">
        <img className="pfp" src={headshot} alt="Headshot"/>
        <div className="textInfo">
          <h1 className="typing">
            Andrew Chen
          </h1>
          <h2>
            SJSU Data Science
          </h2>
        </div>
      </div>
    </div>
 );
}


export default Home;
